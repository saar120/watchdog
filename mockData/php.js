const stdout = "root      1423     1  0 Mar21 ?        00:00:24 php-fpm: master process (/etc/php/7.2/fpm/php-fpm.conf)\n" +
    "www-data  1788  1423  0 Mar21 ?        00:00:00 php-fpm: pool www\n" +
    "www-data  1791  1423  0 Mar21 ?        00:00:00 php-fpm: pool www\n" +
    "ubuntu    2924 27616  0 14:18 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492\n" +
    "ubuntu    2925  2924  0 14:18 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492\n" +
    "ubuntu    2926 27616  0 14:18 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492\n" +
    "ubuntu    2927  2926  0 14:18 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492\n" +
    "ubuntu    2928 27616  0 14:18 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492 5\n" +
    "ubuntu    2929  2928  0 14:18 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 efantol12@gmail.com 7080897403494419226sid3281173160533688492 5\n" +
    "ubuntu    4466 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841\n" +
    "ubuntu    4467  4466  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841\n" +
    "ubuntu    4468 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841\n" +
    "ubuntu    4469  4468  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841\n" +
    "ubuntu    4470 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841 5\n" +
    "ubuntu    4471  4470  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 alexandre.anthony83@gmail.com 7080897515327556357sid2992942787735584841 5\n" +
    "ubuntu    5933 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee\n" +
    "ubuntu    5934  5933  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee\n" +
    "ubuntu    5935 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee\n" +
    "ubuntu    5936  5935  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee\n" +
    "ubuntu    5937 27616  0 14:19 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee 5\n" +
    "ubuntu    5938  5937  0 14:19 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php customrtmp 20 moisesacher@gmail.com 74318550-1877-4653-a6fe-051e446407ee 5\n" +
    "ubuntu    7379 27616  0 14:07 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492\n" +
    "ubuntu    7380  7379  0 14:07 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492\n" +
    "ubuntu    7381 27616  0 14:07 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492\n" +
    "ubuntu    7382  7381  0 14:07 ?        00:00:02 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492\n" +
    "ubuntu    7383 27616  0 14:07 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492 5\n" +
    "ubuntu    7384  7383  0 14:07 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 acehgokil1996@gmail.com 7080894499873966875sid3281173115772600492 5\n" +
    "ubuntu    7878 27616  0 14:20 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673\n" +
    "ubuntu    7879  7878  0 14:20 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673\n" +
    "ubuntu    7880 27616  0 14:20 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673\n" +
    "ubuntu    7881  7880  0 14:20 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673\n" +
    "ubuntu    7882 27616  0 14:20 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673 5\n" +
    "ubuntu    7883  7882  0 14:20 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 emrahsnoglu@gmail.com 7080897871293188865sid7080897827467004673 5\n" +
    "ubuntu    7974 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170\n" +
    "ubuntu    7975  7974  0 12:50 ?        00:00:12 php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170\n" +
    "ubuntu    7976 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170\n" +
    "ubuntu    7977  7976  0 12:50 ?        00:00:17 php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170\n" +
    "ubuntu    7978 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170 5\n" +
    "ubuntu    7979  7978  0 12:50 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 720 mbunawas255@gmail.com 7080874522253052674sid7080874546479975170 5\n" +
    "ubuntu    8331 27616  0 11:53 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478\n" +
    "ubuntu    8332  8331  0 11:53 ?        00:00:26 php /var/www/loola/platform-api/src/chat_listener.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478\n" +
    "ubuntu    8333 27616  0 11:53 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478\n" +
    "ubuntu    8334  8333  0 11:53 ?        00:00:39 php /var/www/loola/platform-api/src/heartbeat.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478\n" +
    "ubuntu    8335 27616  0 11:53 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478 5\n" +
    "ubuntu    8336  8335  0 11:53 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php instagram 720 noiretvafrica1-4098@pages.plusgoogle.com 17959787629598478 5\n" +
    "ubuntu    8718 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb\n" +
    "ubuntu    8719  8718  0 12:50 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb\n" +
    "ubuntu    8721 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884\n" +
    "ubuntu    8722  8721  0 12:50 ?        00:00:15 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884\n" +
    "ubuntu    8723 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb\n" +
    "ubuntu    8724  8723  0 12:50 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb\n" +
    "ubuntu    8725 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884\n" +
    "ubuntu    8726  8725  0 12:50 ?        00:00:25 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884\n" +
    "ubuntu    8727 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb 5\n" +
    "ubuntu    8728  8727  0 12:50 ?        00:00:03 php /var/www/loola/platform-api/src/active_users.php twitch 240 themusiqfactory@gmail.com 5195c2e2-616f-41be-97d8-b4f1c9b868bb 5\n" +
    "ubuntu    8729 27616  0 12:50 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884 5\n" +
    "ubuntu    8730  8729  0 12:50 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 240 themusiqfactory@gmail.com 7080871875907275562sid3569403182884847884 5\n" +
    "ubuntu    9073 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462\n" +
    "ubuntu    9074  9073  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462\n" +
    "ubuntu    9075 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462\n" +
    "ubuntu    9076  9075  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462\n" +
    "ubuntu    9077 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462 5\n" +
    "ubuntu    9078  9077  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 emilfxhrin@gmail.com 7080898070052866842sid3281173171538231462 5\n" +
    "ubuntu    9118 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068\n" +
    "ubuntu    9119  9118  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068\n" +
    "ubuntu    9120 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068\n" +
    "ubuntu    9121  9120  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068\n" +
    "ubuntu    9122 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068 5\n" +
    "ubuntu    9123  9122  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 rzlmaulana95@gmail.com 7080898098725194523sid3281173171872465068 5\n" +
    "ubuntu    9990 27616  0 14:08 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529\n" +
    "ubuntu    9991  9990  0 14:08 ?        00:00:02 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529\n" +
    "ubuntu    9992 27616  0 14:08 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529\n" +
    "ubuntu    9993  9992  0 14:08 ?        00:00:03 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529\n" +
    "ubuntu    9994 27616  0 14:08 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529 5\n" +
    "ubuntu    9995  9994  0 14:08 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 240 diversshownecsa@gmail.com 7080894726098012933sid2992942744115347529 5\n" +
    "ubuntu   10379 27616  0 13:07 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 prod.alexsadbeats@gmail.com 7080878816620595973sid2992942495679119433\n" +
    "ubuntu   10380 10379  0 13:07 ?        00:00:09 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 prod.alexsadbeats@gmail.com 7080878816620595973sid2992942495679119433\n" +
    "ubuntu   10381 27616  0 13:07 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 prod.alexsadbeats@gmail.com 7080878816620595973sid2992942495679119433\n" +
    "ubuntu   10382 10381  0 13:07 ?        00:00:17 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 prod.alexsadbeats@gmail.com 7080878816620595973sid2992942495679119433\n" +
    "ubuntu   10449 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889\n" +
    "ubuntu   10450 10449  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889\n" +
    "ubuntu   10451 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889\n" +
    "ubuntu   10452 10451  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889\n" +
    "ubuntu   10453 27616  0 14:21 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889 5\n" +
    "ubuntu   10454 10453  0 14:21 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 erceyx@gmail.com 7080898117029481222sid2992942796462882889 5\n" +
    "ubuntu   11920 27616  0 14:22 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/validate_user.php fotokunst.stuttgart@gmail.com tiktok UserPassword matthias29113 'Sommer19!' DE\n" +
    "ubuntu   11921 11920  1 14:22 ?        00:00:00 php /var/www/loola/platform-api/src/validate_user.php fotokunst.stuttgart@gmail.com tiktok UserPassword matthias29113 Sommer19! DE\n" +
    "ubuntu   12086 27616  0 14:22 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/validate_user.php ignaciojavier1990@gmail.com tiktok UserPassword 634989434 'Yanhira1990' ES\n" +
    "ubuntu   12087 12086  3 14:22 ?        00:00:00 php /var/www/loola/platform-api/src/validate_user.php ignaciojavier1990@gmail.com tiktok UserPassword 634989434 Yanhira1990 ES\n" +
    "ubuntu   12131  8203  0 14:22 pts/0    00:00:00 grep --color=auto php\n" +
    "ubuntu   14244 27616  0 13:22 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 sfoo1004@gmail.com 7080882703675345666sid7080882751242521346\n" +
    "ubuntu   14246 14244  0 13:22 ?        00:00:07 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 sfoo1004@gmail.com 7080882703675345666sid7080882751242521346\n" +
    "ubuntu   14247 27616  0 13:22 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 sfoo1004@gmail.com 7080882703675345666sid7080882751242521346\n" +
    "ubuntu   14248 14247  0 13:22 ?        00:00:11 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 sfoo1004@gmail.com 7080882703675345666sid7080882751242521346\n" +
    "ubuntu   15322 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041\n" +
    "ubuntu   15323 15322  0 14:11 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041\n" +
    "ubuntu   15324 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041\n" +
    "ubuntu   15325 15324  0 14:11 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041\n" +
    "ubuntu   15326 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041 5\n" +
    "ubuntu   15327 15326  0 14:11 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 putranoormustakeem78@gmail.com 7080895402966305563sid3281173129661776041 5\n" +
    "ubuntu   16099 27616  0 11:20 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 kw.ff23@gmail.com 7080851320822844161sid7080851322177751809\n" +
    "ubuntu   16100 16099  0 11:20 ?        00:00:22 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 kw.ff23@gmail.com 7080851320822844161sid7080851322177751809\n" +
    "ubuntu   16101 27616  0 11:20 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 kw.ff23@gmail.com 7080851320822844161sid7080851322177751809\n" +
    "ubuntu   16102 16101  0 11:20 ?        00:00:33 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 kw.ff23@gmail.com 7080851320822844161sid7080851322177751809\n" +
    "ubuntu   17794 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018\n" +
    "ubuntu   17795 17794  0 14:11 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018\n" +
    "ubuntu   17796 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018\n" +
    "ubuntu   17797 17796  0 14:11 ?        00:00:02 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018\n" +
    "ubuntu   17798 27616  0 14:11 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018 5\n" +
    "ubuntu   17799 17798  0 14:11 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 mohanadhamdan990@gmail.com 7080895572026067714sid7080895591689014018 5\n" +
    "ubuntu   20848 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476\n" +
    "ubuntu   20849 20848  0 14:13 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476\n" +
    "ubuntu   20850 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476\n" +
    "ubuntu   20851 20850  0 14:13 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476\n" +
    "ubuntu   20852 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476 5\n" +
    "ubuntu   20853 20852  0 14:13 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 mastadonat2012@gmail.com 7080895934699146010sid3281173137985634476 5\n" +
    "ubuntu   21616 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228\n" +
    "ubuntu   21617 21616  0 14:13 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228\n" +
    "ubuntu   21653 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228\n" +
    "ubuntu   21654 21653  0 14:13 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228\n" +
    "ubuntu   21655 27616  0 14:13 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228 5\n" +
    "ubuntu   21656 21655  0 14:13 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 240 wira.game01@gmail.com 7080896032590072602sid3281173139599917228 5\n" +
    "ubuntu   22770 27616  0 13:51 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412\n" +
    "ubuntu   22771 22770  0 13:51 ?        00:00:05 php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412\n" +
    "ubuntu   22772 27616  0 13:51 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412\n" +
    "ubuntu   22773 22772  0 13:51 ?        00:00:08 php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412\n" +
    "ubuntu   22774 27616  0 13:51 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412 5\n" +
    "ubuntu   22775 22774  0 13:51 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 720 william3.cooper@gmail.com 7080888352458771243sid3569403425551024412 5\n" +
    "ubuntu   25614 27616  0 14:14 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116\n" +
    "ubuntu   25615 25614  0 14:14 ?        00:00:03 php /var/www/loola/platform-api/src/chat_listener.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116\n" +
    "ubuntu   25616 27616  0 14:14 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116\n" +
    "ubuntu   25617 25616  0 14:14 ?        00:00:02 php /var/www/loola/platform-api/src/heartbeat.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116\n" +
    "ubuntu   25618 27616  0 14:14 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116 5\n" +
    "ubuntu   25619 25618  0 14:14 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php instagram 240 angelyne.lisinski@gmail.com 18229826650128116 5\n" +
    "ubuntu   28936 27616  0 11:45 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 yousufraissimedia1@gmail.com 7080857912888871681sid7080857923559934722\n" +
    "ubuntu   28937 28936  0 11:45 ?        00:00:18 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 yousufraissimedia1@gmail.com 7080857912888871681sid7080857923559934722\n" +
    "ubuntu   28938 27616  0 11:45 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 yousufraissimedia1@gmail.com 7080857912888871681sid7080857923559934722\n" +
    "ubuntu   28939 28938  0 11:45 ?        00:00:25 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 yousufraissimedia1@gmail.com 7080857912888871681sid7080857923559934722\n" +
    "ubuntu   29369 27616  0 14:15 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596\n" +
    "ubuntu   29370 29369  0 14:15 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596\n" +
    "ubuntu   29371 27616  0 14:15 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596\n" +
    "ubuntu   29372 29371  0 14:15 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596\n" +
    "ubuntu   29373 27616  0 14:15 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596 5\n" +
    "ubuntu   29374 29373  0 14:15 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 ahmadkhadafii07@gmail.com 7080896593330850586sid3281173148924903596 5\n" +
    "ubuntu   30376 27616  0 14:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250\n" +
    "ubuntu   30377 30376  0 14:03 ?        00:00:02 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250\n" +
    "ubuntu   30378 27616  0 14:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250\n" +
    "ubuntu   30379 30378  0 14:03 ?        00:00:03 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250\n" +
    "ubuntu   30380 27616  0 14:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250 5\n" +
    "ubuntu   30381 30380  0 14:03 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 hikhak.1178@gmail.com 7080893447535610626sid7080893422617365250 5\n" +
    "ubuntu   31146 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642\n" +
    "ubuntu   31147 31146  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642\n" +
    "ubuntu   31148 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642\n" +
    "ubuntu   31149 31148  0 14:16 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642\n" +
    "ubuntu   31150 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642 5\n" +
    "ubuntu   31151 31150  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 dilgulsss777@gmail.com 7080896656548006658sid7080896668215888642 5\n" +
    "ubuntu   31403 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604\n" +
    "ubuntu   31404 31403  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604\n" +
    "ubuntu   31405 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604\n" +
    "ubuntu   31406 31405  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604\n" +
    "ubuntu   31407 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604 5\n" +
    "ubuntu   31408 31407  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 syafaat2707@gmail.com 7080896695479520027sid3281173150401298604 5\n" +
    "ubuntu   31725 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524\n" +
    "ubuntu   31726 31725  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524\n" +
    "ubuntu   31727 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524\n" +
    "ubuntu   31728 31727  0 14:16 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524\n" +
    "ubuntu   31729 27616  0 14:16 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524 5\n" +
    "ubuntu   31730 31729  0 14:16 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 triie.prabowo@gmail.com 7080896752563604251sid3281173150940004524 5\n" +
    "ubuntu   34581 27616  0 11:48 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 vincent.stanley@ymail.com 7080858561764461338sid3281172555209638060\n" +
    "ubuntu   34582 34581  0 11:48 ?        00:00:17 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 vincent.stanley@ymail.com 7080858561764461338sid3281172555209638060\n" +
    "ubuntu   34583 27616  0 11:48 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 vincent.stanley@ymail.com 7080858561764461338sid3281172555209638060\n" +
    "ubuntu   34585 34583  0 11:48 ?        00:00:22 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 vincent.stanley@ymail.com 7080858561764461338sid3281172555209638060\n" +
    "ubuntu   34923 27616  0 14:04 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516\n" +
    "ubuntu   34924 34923  0 14:04 ?        00:00:01 php /var/www/loola/platform-api/src/chat_listener.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516\n" +
    "ubuntu   34925 27616  0 14:04 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516\n" +
    "ubuntu   34927 34925  0 14:04 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516\n" +
    "ubuntu   34934 27616  0 14:04 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516 5\n" +
    "ubuntu   34935 34934  0 14:04 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 20 mukhlisrasyid95@gmail.com 7080893823316560666sid3281173104636985516 5\n" +
    "ubuntu   35217 27616  0 04:49 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 alexspreiss@gmail.com 7080749302637415214sid3569401246660165900\n" +
    "ubuntu   35218 35217  0 04:49 ?        00:01:24 php /var/www/loola/platform-api/src/chat_listener.php tiktok 720 alexspreiss@gmail.com 7080749302637415214sid3569401246660165900\n" +
    "ubuntu   35219 27616  0 04:49 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 alexspreiss@gmail.com 7080749302637415214sid3569401246660165900\n" +
    "ubuntu   35220 35219  0 04:49 ?        00:02:23 php /var/www/loola/platform-api/src/heartbeat.php tiktok 720 alexspreiss@gmail.com 7080749302637415214sid3569401246660165900\n" +
    "ubuntu   35586 27616  0 13:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php instagram 240 osamaalabri2018@gmail.com 17994998335440504\n" +
    "ubuntu   35587 35586  0 13:03 ?        00:00:35 php /var/www/loola/platform-api/src/chat_listener.php instagram 240 osamaalabri2018@gmail.com 17994998335440504\n" +
    "ubuntu   35588 27616  0 13:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php instagram 240 osamaalabri2018@gmail.com 17994998335440504\n" +
    "ubuntu   35589 35588  0 13:03 ?        00:00:20 php /var/www/loola/platform-api/src/heartbeat.php instagram 240 osamaalabri2018@gmail.com 17994998335440504\n" +
    "ubuntu   35590 27616  0 13:03 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php instagram 240 osamaalabri2018@gmail.com 17994998335440504 5\n" +
    "ubuntu   35591 35590  0 13:03 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php instagram 240 osamaalabri2018@gmail.com 17994998335440504 5\n" +
    "ubuntu   35628 27616  0 14:17 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449\n" +
    "ubuntu   35629 35628  0 14:17 ?        00:00:00 php /var/www/loola/platform-api/src/chat_listener.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449\n" +
    "ubuntu   35630 27616  0 14:17 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449\n" +
    "ubuntu   35631 35630  0 14:17 ?        00:00:01 php /var/www/loola/platform-api/src/heartbeat.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449\n" +
    "ubuntu   35632 27616  0 14:17 ?        00:00:00 /bin/sh -c php /var/www/loola/platform-api/src/active_users.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449 5\n" +
    "ubuntu   35633 35632  0 14:17 ?        00:00:00 php /var/www/loola/platform-api/src/active_users.php tiktok 240 squallgames05@gmail.com 7080897149730343685sid2992942781092069449 5";

module.exports = stdout;