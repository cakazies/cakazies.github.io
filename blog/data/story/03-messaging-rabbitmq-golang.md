# Messaging Queue RabbitMQ dengan Golang

## Muqaddimah 

Okey guys kali ini penulis akan share tentang messaging Golang dengan RabbitMQ, Oke sebelum itu mungkin lebih afdol kita harus tahu apa itu messaging atau Message broker? btw messaging sama message broker itu sama yah hehehe, oke mungkin penjelasan panjangnya bisa baca di [sini](https://en.wikipedia.org/wiki/Message_broker), pointnya adalah message broker berfungsi seperti tukang pos, yaitu mengantarkan pesan dari pengirim dan menyalurkan suratnya ke penerima, jadi message broker adalah alur atau pengantar pesan dari apps satu ke apps yang lain, contoh realnya adalah, jika suatu orang akan melakukan process booking tiket, maka setelah dia checkout untuk pemesanan dan pembayaran akan muncul, itu kebanyakan menggunakan RabbitMQ karena user sudah bisa memilih hotel yang lain dengan pembayaran menyusul. 

## Mengapa kita butuh Message Broker

Okey sebenarnya adalah sebuah aplikasi tanpa menggunaan RabbitMQ bisa saja digunakan akan tetapi untuk beberapa kasus untuk process lebih efisien enak menggunakan rabbitmq, contohnya adalah diatas jika user daftar untuk jadi member, maka akan dilakukan process verifikasi email apakah email tersebut valid atau tidak, untuk requestnya jika tidak menggunakan message broker maka ketika dilakukan submit, maka user akan menunggu sampai email terkirim ke email yang telah dimasukkan, bagaimana jika untuk emailnya ada down maka user akan menunggu sangat lama, oleh karena itu salah satu case digunakan message broker adalah untuk case seperti ini.

## Apa itu RabbitMQ ?

Apa itu RabbitMQ? mungkin dokumentasi lengkapnya bisa di baca di [sini](https://www.rabbitmq.com/), intinya rabbitmq adalah salah satu tools message broker yang digunakan untuk mentransfer data dari producer ke consumer kamu bisa lihat penjelasan untuk gambar ini 

![images](https://cdn-images-1.medium.com/max/1600/1*Wa0SEbQGo_XE6TxFDProVQ.png)

Oke setelah kita membaca bagaimana fungsi dan flow dari rabbitmq kita harus tahu juga bagaimana untuk integrasi dengan Golang. berikut akan dijelaskan step by step untuk membuat producer dan consumer di Golang:

## Membuat Tree Folder 

oke sebelum kita membuat folder projectnya lebih afdol kita harus mendapatkan plugins rabbitmq di golang dengan cara seperti ini 

`go get github.com/streadway/amqp`

Setelah kamu get dari plugins tersebut, kemudian buat folder `go-rabbitmq` dimana buat folder seperti gambar dibawah ini 

![imagaes](https://cdn-images-1.medium.com/max/1200/1*H7ZwKY5ixbFHPhvI-cKuCw.png)

Kamu bisa melihat untuk struktur folder yang akan kita gunakan, abagikan untuk `readme.md` dan `LICENSE` jika kamu membuatnya juga its okey sih tapi jika tidak ya gpp hehehe.

## Buat Folder Producer 

Pertama kita akan membuat producer yaitu service yang digunakan untuk mengirim data ke rabbitMQ. Oke langsung saja buat file yang bernama `main.go` dengan code seperti ini: 

![images](https://i.imgur.com/mhMJMbb.png)

Jika kamu lihat untuk koneksi dan membuat channel dilakukan diawal ini untuk memastikan bahwa rabbitmq yang akan kita gunakan apakah sudah bisa connect apa belum, jika sudah maka otomatis akan membuat channel, oh iya ini saya install rabbitmq di local mungkin bisa dilakukan dilocal masing-masing yah atau mungkin sudah subscribe untuk AMQ bisa juga dilakukan. oke next ke step selanjutnya.

![images](https://i.imgur.com/gbQMUqO.png)

oke step selanjutnya adalah declare untuk nama pesan yang akan kita kirim, iya nama pesan ini harus sama dengan nanti yang akan kita buat di consumer. oke next adalah mengirim pesan dengan isinya `HELLO MESSAGING RABBITMQ` pesan ini yang akan dikirim dan nantinya akan diterima oleh consumer dengan nama `TRY-MESSAGING` 

## Membuat Consumer

Oke flow kedua adalah kita akan membuat consumer, apa itu consumer ? consumer adalah sebuah service yang digunakan untuk menangkap pesan yang akan dikirimkan, dalam hal ini nantinya pesan yang akan diterima adalah `HELLO MESSAGING RABBITMQ` si consumer harus menerima isi pesan ini dan kemudian kita tampilkan, oke mulai dari membuat file yang bernama `main.go` sama seperti tree yang sebelumnya di taruh di dalamnya folder consumer, kemudian masukkan code seperti ini:

![images](https://i.imgur.com/58bGijh.png)

Oke mungkin kurang lebih sama dengan yang producer, pertama check koneksi dengan rabbitmq dan membuat channel yang akan digunaan untuk menerima data.

![images](https://i.imgur.com/TBwm82u.png)

Kemudian untuk code yang kedua adalah menulis untuk mengconsume data dari yang dikirimkan oleh producer, dan dalam hal ini nantinya data yang telah dikirim akan di tampilkan di console. Oke code kita siap untuk di testing, mungkin bisa di coba dengan pertama menjalankan code ini 

`go run producer/main.go`

maka dalam console akan muncul seperti ini: 

![images](https://cdn-images-1.medium.com/max/2400/1*LG_CTtLCi00eGA7AF8robw.png)

Terminal setelah kita execute command tersebut tidak menghasilkan apa apa, akan tetapi data yang ada di produce sudah di kirim ke RabbitMQ, oke untuk memastikan pesan yang terkirim sudah dilakukan, bisa di check dengan membuka dashboard Rabbitmq seperti ini: 

![images](https://cdn-images-1.medium.com/max/1600/1*FoXQEriHWR_r8GvYtrQ2QQ.png)

Kamu bisa lihat pada dashboard di RabbitMQ terdapat ada Queues dengan nama `TRY-MESSAGING` itu adalah pesan yang sudah dikirimkan oleh producer dan nantinya akan di consume oleh consumer, oke selanjutnya kita akan merunning consumer dengan command:

`go run consumer/main.go`

![images](https://cdn-images-1.medium.com/max/2400/1*yLd_lfm2pP03B-NEZ0IOmw.png)

Oke Doneee bisa dilihat itu adalah pesan yang tadi dikirimkan oleh producer dan di consum oleh consumer heheh Done yey

article ini ada dalam versi bahasa inggrisnya di medium bisa di checkout

dan jika bisa lihat source di github juga ada di [link](https://github.com/cakazies/go-rabbitmq)