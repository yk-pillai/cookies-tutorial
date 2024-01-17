1. Start both server1 and server2
2. Access server1 from localhost and server2 from 127.0.0.1
  This is because cookie domain should be different.
3. Change the sameSite attributes from server1/index.js and see the <img> and <a>
behaviour
