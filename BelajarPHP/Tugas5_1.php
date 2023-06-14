<caption>Tabel Logika</caption>
<table border=1><tr><th>Input 1</th><th>Input2</th><th>AND</th><th>OR</th></tr>
<tr><td>false</td><td>false</td><td><?php printf(false && false); ?></td><td><?php printf(false || false); ?></td></tr>
<tr><td>false</td><td>true</td><td><?php printf(false && true); ?></td><td><?php printf(false || true); ?></td></tr>
<tr><td>true</td><td>false</td><td><?php printf(true && false); ?></td><td><?php printf(true || false); ?></td></tr>
<tr><td>true</td><td>true</td><td><?php printf(true && true); ?></td><td><?php printf(true || true); ?></td></tr><table>
