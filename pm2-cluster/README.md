# Improve NodeJs's Performance using Cluster

Notes:

<ul>
<li>Install pm2: npm install -g pm2</li>
<li>To run: pm2 start src/app.js -i -1</li>
<li>Simultaneously browse http://localhost:3000 and http://localhost:3000/fast</li>
<li>Result: http://localhost:3000 is not blocking http://localhost:3000/fast</li>
</ul>
