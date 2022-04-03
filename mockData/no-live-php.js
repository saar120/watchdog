const noLivePhp = "ubuntu@ip-172-31-69-162:~/watchdog$ ps -ef | grep ffmpeg\n" +
    "ubuntu   28633 25812  0 09:20 pts/0    00:00:00 grep --color=auto ffmpeg\n" +
    "\n" +
    "ubuntu@ip-172-31-69-162:~/watchdog$ ps -ef | grep php\n" +
    "root       887     1  0 Mar20 ?        00:00:45 php-fpm: master process (/etc/php/7.2/fpm/php-fpm.conf)\n" +
    "www-data  1046   887  0 Mar20 ?        00:00:00 php-fpm: pool www\n" +
    "www-data  1047   887  0 Mar20 ?        00:00:00 php-fpm: pool www\n" +
    "ubuntu   28643 25812  0 09:20 pts/0    00:00:00 grep --color=auto php\n";

module.exports = noLivePhp;
