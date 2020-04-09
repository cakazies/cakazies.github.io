# Membuat Rest API Golang dengan framework Revel dengan CockroachDB  🐞

![images](https://miro.medium.com/max/4800/1*aLEMQNKbgqdtcboysOp-sg.jpeg)

## Installasi Revel

Hello Guys, sudah lama yah ga update untuk blog saya lagi hehehe, okey untuk sekarang saya akan share actually uda beberapa minggu yang lalu sih harusnya article ini dibuat ya apa oleh baut wkwkwk yang penting bisa di buat yah wkwkwk, kali ini gw akan share tentang bagaimana sih penggunaan framework revel di golang, ada beberapa startup sih yang sudah menggunakan framework ini untuk production, ga usah gw sebutkan yah ngapain wkwkwkwk, okey untuk project ini saya document    asikan juga di github saya, nanti di akhir saya akan share untuk linknya yah, check it out ...

Anyway bro, agak kurang umum ya database yang akan saya gunakan, ini juga lagi booming sih untuk cockroachdb (which is kecoa wkwkw) yah memang jika kamu buka [website](https://www.cockroachlabs.com/) resminya akan terpapar semua penjelasan dan documentasi untuk database ini, FYI cockroachdb ini kyk postgresql loe hampir persis malahan untuk detailnya bisa di check di websitenya yah soalnya juga untuk asbabun nuzulnya juga ga begitu dalami wkwkwk ya maap 

Mulai dari frameworknya golang yah Revel untuk website resminya bisa di check [githubnya](github.com/revel/revel) revel, okey untuk instalasinya kita get repositorynya revel yah, untuk commandnya biasa pake `go get`
- go get github.com/revel/revel 
- go get github.com/revel/cmd/revel

jangan lupa dua duanya di go get yah,kalau sudah di go get pastikan untuk check apakah revel sudah terinstall apa belum, jika sudah masuk di directory `GOPATH` biasanya di `go/src` kemudian ketikkan command ini

> revel version

jika muncul informasi revel framework-nya versi berapa maka yeeee revel sudah terinstall dilaptop, sekarang nextnya adalah create project menggunakan command dari revel juga bisa loh dengan command `revel new your_project`  maka akan secara otomatis generate *boilerplate* khusus untuk revel project, nah folder-folder apa saja yang tercreate adalah 
- app 
- conf 
- message 
- public 
- test
- utils 

untuk check apakah sudah bisa running project revel kamu bisa gunakan command ini 

> revel run -a your_project

jika tidak ada error maka kamu bisa open browser kamu bisa menggunakan chrome, firefox ataupun safari jangan IE yah wkwkwkwk tapi juga gpp sih takutnya ga umum ga works wkwkwkwk, okey jika sudah masukkan alamat **`localhost:9000`** karena default port di revel adalah 9000 akan tetapi bisa di adjust sesuai dengan kebutuhan jika port itu sudah digunakan, okey jika tidak terjadi masalah maka akan muncul tulisan **`IT Works!`** maka project revel kamu sudah bisa digunakan dan kamu bisa tambahin sesuai dengan kebutuhan kamu....

## Config Database

Sebelumnya sudah di singgung kita akan menggunakan database cockroachDB its means mostly hampir sama dengan postgresql jadi tenang bro wkwkwkwk okey,, 

> untuk framework revel bisa kamu tambahkan folder yang biasa kamu pakai, contohnya biasa menggunakan folder `config` bisa di tambahkan sesuai dengan kebutuhan

Kita buat koneksi dahulu yah untuk ke cockroachdbnya like this: 

<script src="https://gist.github.com/cakazies/52ea9d602e513b8725cef9209858bf05.js"></script>

Bisa dilihat untuk contohnya koneksi untuk cockroachdb, untuk drivernya masih menggunakan postgresql, di documentasinya juga masih menggunakan postgresql, its okey kita juga akan mencoba apa bedanya nantinya wkwkwk, FYI untuk cara menginstall cockroachDB tidak di jelaskan pada article ini yah jadi bisa lihat [disini](https://www.cockroachlabs.com/docs/stable/install-cockroachdb-mac.html), nextnya bisa di change untuk koneksinya like user, password, dbname bisa di compare dengan koneksi yang sudah di install yah. Supaya kita bisa langsung praktek untuk bikin API gw sudah siapkan dummy data untuk digunakan yah supaya bisa cepat implement, berikut dummydata yang akan digunakan: 

<script src="https://gist.github.com/cakazies/35ae28b256a4bf7fc004a9a9459474d1.js"></script>

## Create Routing 

Untuk pertama kali bisa dilihat di file `your_project/conf/routes` kamu bisa melihat banyak code yang default sudah ada, tapi kamu bisa focus untuk code ini 

```
GET     /                                       App.Index
```

Code ini berfungsi untuk mengatur route yang nanti akan kamu buat di apps revel ini, bisa kamu adjust sesuai dengan kebutuhan, okey contohnya kita akan menambahkan route student 

```
GET     /                                       App.Index
GET     /students                               App.GetStudents
```

untuk `GET` itu unutk mengatur method http yang akan kita buat, bisa berbentuk `POST`, `PUT` atau yang lainnya, untuk `/student` itu digunakan untuk alamat setelah `host` yang akan ditambahkan, nanti route ini yang akan digunakan untuk memanggil code yang akan telah dibuat. `App.GetStudents` untuk code ini adalah untuk memanggil function yang akan kita buat setelah ini yaitu `GetStudents`, coba buka file di `app/controllers/app.go` kamu bisa tambahkan untuk membuat function `GetStudents` like this: 

https://gist.github.com/cakazies/5ddf0680b4a9dfc7ed302ba1d750b2a1#file-go-reco-controller-go

In this case, query diletakkan di dalam controller untuk project yang real tidak disarankan yah tapi harus diletakkan di folder tertentu like models, bisa di adjust sesuai dengan kebutuhan sih its okey, selanjutnya adalah bagaimana testing untuk API yang telah kita buat work apa tidak hehehe, untuk testingnya bisa menggunakan `postman` atau `insomnia` terserah dan tergantung selera masing-masing. Ketikkan URL `localhost:9000/students`  dengan method `GET`, jika tidak ada error dan pastikan projectnya sudah di running, maka akan muncul response seperti ini 

https://gist.github.com/cakazies/fd5b830cc2a6de4216c01c1d53379704#file-go-reco-json-json

Yeay mungkin cukup sekian untuk articlenya sedikit memberi wawasan sih bahwa mostly sampai saat ini framework yang ada di golang belum sepenuhnya mengatur end to end jadi lebih bisa di adjust dan depends you needed, untuk testimonunya menggunakan revel sih, for me ga terlalu enak sih masih lebih suka menggunakan GIN atau MUX untuk routernya wkwkwkwk tapi coba2 aja sih okey well done bro articlenya, oh iya untuk code-nya sudah ada get detal, update, create data, delete data juga sih tapi kebanyakn untuk saya buat articlenya jadi satu monggo di cicipi saja yah untuk codenya di [github](https://github.com/cakazies/go-reco) 

