exports.handler = async function(){
  return {
    statusCode: 200,
    headers: {'Content-Type':'application/json','Cache-Control':'no-store'},
    body: JSON.stringify({
      url: process.env.SUPABASE_URL || '',
      key: process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || ''
    })
  };
};
