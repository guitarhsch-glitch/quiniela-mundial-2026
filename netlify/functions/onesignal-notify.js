exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '{}' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const body = JSON.parse(event.body || '{}');
    const appId = process.env.ONESIGNAL_APP_ID || body.app_id;
    const restKey = process.env.ONESIGNAL_REST_API_KEY;
    if (!appId) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing OneSignal App ID' }) };
    if (!restKey) return { statusCode: 500, headers, body: JSON.stringify({ error: 'Missing ONESIGNAL_REST_API_KEY in Netlify environment variables' }) };

    const title = String(body.title || 'Quiniela Mundial 2026').slice(0, 120);
    const message = String(body.message || 'Hay una nueva actividad en tu grupo.').slice(0, 240);
    const groupId = String(body.group_id || '');
    const senderId = String(body.sender_id || '');
    const targetParticipantId = String(body.target_participant_id || '');
    const sendAfter = body.send_after ? new Date(body.send_after) : null;
    const excludeSender = body.exclude_sender !== false;

    const filters = [];
    if (groupId) filters.push({ field: 'tag', key: 'group_id', relation: '=', value: groupId });
    if (targetParticipantId) {
      if (filters.length) filters.push({ operator: 'AND' });
      filters.push({ field: 'tag', key: 'participant_id', relation: '=', value: targetParticipantId });
    } else if (senderId && excludeSender) {
      if (filters.length) filters.push({ operator: 'AND' });
      filters.push({ field: 'tag', key: 'participant_id', relation: '!=', value: senderId });
    }

    const payload = {
      app_id: appId,
      headings: { en: title, es: title },
      contents: { en: message, es: message },
      url: body.url || undefined,
      send_after: sendAfter && !Number.isNaN(sendAfter.getTime()) ? sendAfter.toUTCString() : undefined,
      filters: filters.length ? filters : undefined,
      included_segments: filters.length ? undefined : ['Subscribed Users']
    };

    const resp = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${restKey}` },
      body: JSON.stringify(payload)
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) return { statusCode: resp.status, headers, body: JSON.stringify({ error: 'OneSignal error', details: data }) };
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, recipients: data.recipients || 0, data }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
