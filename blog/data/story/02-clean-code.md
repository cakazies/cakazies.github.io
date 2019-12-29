# Clean Code ? untuk apa sih ? 

oke guysss pada artikel selanjutnya akan dijelaskan tentang apa itu clean code, bagaimana cara untuk menulis kode yang baik dan langkah-langkah apa saja yang dibutuhkan untuk menulis kode yang baik. Oh iya jika kamu pingin membaca dalam bahasa inggris bisa membaca di medium si penulis di [sini](https://medium.com/@cakazies/clean-code-what-for-2d9252dd5247) 

## Desclaimer
tips-tips berikut tidaklah pakem, penulis mengumpulkan beberapa sumber dan pengalaman penulis untuk memberikan tips tips berikut.

oke well, biasanya seorang setelah lulus dari universitas atau mungkin dari SMK (yang ada codingnya) kebanyakan programmer akan membuat aplikasi pokoknya jalan dan selesai (kebanyakan yah, tidak semua) wkwkwkwk dan ini yang paling umum, yang memahami flow code yang dibuat hanyalah programmer dan Tuhan wwkwkwkwk ketika beberapa hari hanya Tuhan yang memahami code tersebut wkwkwkw 😂😂, sebenarnya ini tidaklah salah semua orang itu mempunyai progress pada setiap langkahnya dan karirnya, akan tetapi jika ini dilakukan selamnya itu sangatlah salah hehehe, karena mainset programmer itu harus learn forever, belajar selamnya jika kamu tidak belajar maka karir.mu hanya itu itu saja. Kembali dengan clean code, pada menulis sebuah code tidak hanya code jalan dan running dan selesai, akan tetapi code yang kita tulis harus jelas dan minimal orang-orang di tim kita bisa untuk membaca flow code yang telah kita buat.

Contoh yang penulis gunakan menggunakan bahasa pemrograman Golang jika kamu belum familiar dengan golang bisa didiskusikan DM si penulis ini hehehehe, kenapa menggunakan Golang ? tidak ada alasan serius karena pada saat penulis menulis artikel ini penulis sedang bekerja menggunakan bahasa Golang

## Asal mula Clean Code 
Clen code tercipta atau mulai menjadi perhatian ketika kita mulai development sebuah apps secara tim besar, karena sebuah tim minimal tahu bagaimana flow yang sudah dikerjakan oleh setim yang lain, karena jika seorang programmer mempunyai masalah maka tim yang lain mungkin bisa membantu menyelesaikan masalah tersebut, contoh yang lain adalah jika suatu company merekrut seorang programmer dan dia membuat beberapa aplikasi, kemudian setelah 2 tahun programmer itu resign, bagaimana jika programmer ini tidak menerapkan clean code, maka programmer selanjutnya akan kesulitan untuk bagaimana meneruskan code yang sudah ada ini (kasus ini banyak ditemukan dilapangan hehe termasuk dipenulis)

Oke setelah sekian muqaddimah yang sudah penulis paparkan hehe, maka berikut adalah minimal ada beberapa yang harus dilakukan oleh programmer ketika menulis sebuah code 
- nama untuk variabel, function maupun class
- nama dari folder itu sendiri 
- menulis komen pada code jika dibutuhkan
- defactor code 
- menghapus **dead code**
- Buat Readme 
- Buat Dokumentasi
- Buat unit testing

oke setelah penulis jajarkan list, kemudian penulis akan menjabarkan satu persatu untuk list tersebut 

## 1. Nama untuk Variable, Folder atau Class 
Kebanyakan Programmer yang baru lulus dari universitas atau SMK menulis sebuah variabel atau function tergantung pada pikiran pertama mereka karena mereka berfocus pada kode yang kita tulis haruslah running. contohnya adalah ketika menulis variable hanya 1 huruf seperti 
`var a, var b`, ini jika dirunning tetap jalan tapi apakah tim yang lain kaan faham dengan mksut variabel a,b gitu wkwkwkw, berikut contoh membuat variable yang salah

![images](https://i.imgur.com/olZsUCN.png)

pada saat programmer menulis variable ini pasti programmer tersebut sangat faham kegunaan untuk variable ini, akan tetapi 3 bulan lagi membuka code yang sama, maka kebanyakan akan kebingunan bagaimana, untuk apa variable ini dibuat. Selanjutnya akan ditunjukkan bagaimana menulis code yang benar dan kebanyakan programmer sekarang gunakan 

![images](https://i.imgur.com/GZPlJmz.png)

bisa dilihat untuk penulisan variable jika satu kata maka semua ditulis menggunakan huruf kecil semua jika variable mengandung 2 kata maka huruf pertama kata kedua ditulis dengan Huruf Besar

## 2. Nama dari Folder itu Sendiri

Bagaiman untuk Nama Folder, mengapa kita harus menggunakan nama folder yang sesuai, karena jika kamu sudah mengembangkan beberapa aplikasi yang besar, maka setiap modul kebanyakan akan dikelompokkan menggunakan folder (asumsi ini appsnya menggunakan monolitik) bagaimana jika modul siswa folder codenya dinamakan "A" atau "ABC", tetap betul dan bisa running akan tetapi dikemudian hari akan kesusahan untuk mantenance module siswa tersebut.

## 3. Menulis Komen jika dibutuhkan 

Komen, komen sangat dibutuhkan jika programmer membuat suatu fungsi tertentu, dan fungsi tersebut sangat tidak jelas penggunaannya, contohnya misal: membuat fungsi dimana didalam fungsi ada generate UUID, jika programmer tidak menjelaskan dengan komen, maka akan sulit juga untuk programmer yang lain akan memahami itu

## 4. Defactor Code 

Apa itu refactor code, okey kebanyakan programmer itu bekerja dengan waktu yang tidak masuk akal, dengan waktu yang tidak jelas dan sangat mepet biasanya, maka banyak programmer akan menulis code yang redundan atau duplicate, mungkin ada flow yang bisa dibuatkan function tidak dibuatkan, maka ini harus ditinjau ulang untuk code yang telah kita tulis, apakah ada code yang bisa kita buat untuk function sehingga bisa mempercatik code yang telah kita buat.

## 5. Menghapus Dead Code 

Di universitas kemungkinan besar istilah dead code tidak terdengar akan tetapi dilapngan sering dilakukan tetapi juga programmer tidak menyadari itu adalah dead code, Dead code adalah sebuah kumpulan code atau function yang telah di komen dan tidak digunakan dan sudah masuk di production, itu dinamakan dead code, karena itu kebanyakan start up, sebelum code yang akan masuk di production maka harus direview dulu oleh lead atau yang lain. karena bisa saling mengingatkan kalau ada dead code. 

## 6. Membuat Readme

Readme, mungkin ini juga istilah di yang jarang disebutkan di universitas, oleh karena itu membuat readme dilakukan oleh starup biasanya, mungkin sebagian company juga sudah melakukan standart ini, apa itu readme, readme adalah petunjuk bagaimana melakukan atau penginstalan terhadap repo atau aplikasi yang sudah dilakukan, contohnya kita membuat aplikasi menggunakan Golang, di readme harus dituliskan bagaimana untuk penginstalan aplikasinya dibutuhkan requirment apa saja yang harus disiapkan itu semua harus dijelaskan di readme, minimal orang yang baru saja menginstall aplikasi itu bisa running dengan membaca readme.

## 7. Membuat Dokumentasi

Kamu bisa membayangian Facebook, Google atau Gojek buanyak aplikasi yang sudah dikembangkan dan sudah diintegrasi dengan aplikasi aplikasi yang lain tidak mempunyai dokumentasi dengan baik, jika ada orang yang mau integrasi dengan facebook contohnya, jika tidak ada dokumentasi dari facebook maka orang yang mau integrasi harus menghubungi pihak developer facebooknya, ini merupakan suatu flow yang tidaklah sehat, karena bisa mengganggu pihak developer yang mengembangkan suatu fitur tersebut, maka dibutuhkan untuk dokumentasi

## 8. Membuat Unit Testing  

Oke ini yang terakhir kali, penggunaan Unit Tetsing kemungkinan terjadi di company yang sudah ready untuk product digitalnya karena unit testing ini akan sangat membantu untuk mengembangan selanjutnya yang disebut CI/CD, bisa di search di google, unit teting ini harus tulis oleh programmer dan mengantisipasi apa saja kemungkinan yang akan terjadi seperti contohnya jika suatu fitur membutuhkan parameter `id` kemudian tidak ada maka di saat unit tetsing harus ada untuk parameter tersebut.
