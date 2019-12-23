# Scraping(Mengambil Data dari Website) with Golang

GAMBAR UNRUK SCRAPPING

## Muqaddimah

Okey mungkin ini artikel pertama yang saya buat hehe :’) pertama kalinya saya nulis di blog saya jadi harap dimaklum yah hehe okey langsung saja,
untuk kali ini saya akan membahas tentang Scrapping data dengan [Go](http://www.golang.org) atau [Golang](http://www.golang.org)

Mungkin ada beberapa orang menilai bahwa scrapping data itu ilegal jika tidak memiliki izin untuk mengambil datanya “mungkin di Indonesia belum ada UUDnya sih wkwkwk”. 

Jadi ini dibuat tidak untuk dipergunakan datanya, akan tetapi belajar dalam penggunaan Golang

Okey lanjut broooo

Apa sih scrapping, scrapping itu bahasa “KASAR”-nya adalah mencuri data dari website orang, `loh bro itu kan dosa mencuri hak milik orang lain, tanpa izin terlebih dahulu dengan pemiliknya nanti dosa dan masuk neraka bro jangan dilakukan`, okey sekian artikelnya tidak perlu dibahas, karena dosa wkwkwkwkwkw 🎵 okey memang benar scrapping memang mengambil data dari website orang dan “KEBANYAKAN” belum meminta izin pada si pemilik website tersebut yah memang sih sebagian besar diartikel ini juga ga izin ke pemilik website wkwkwkwkwk 😆, okey next gan, desclimer dulu sih “article ini untuk learning, jadi mengambil data di website jika tidak digunakan untuk hal yang menguntungkan sepihak tidak diperkenankan”

## Article ini tidak membahas tentang

Cara menginstall Golang “asumsinya sudah pada terinstall semua”
bagaimana memilih website yang akan discrapping “ngapain anjir wkwkwk”
Tidak Menjelaskan Semua sintaks Golang “yang Common”
Pertama, yang saya gunakan library orang, karena memanfaatkan yang sudah ada lebih bijak dari pada membuat ulang dari awal wkwkwkwkw “aslinya sih males kalau buat dari awal” okey kita ambil dulu reponya kang PuerkitoBio di
go get github.com/PuerkitoBio/goquery
kalau perlu penjelasan untuk library ini bisa kunjungi repo beliau, documentasinya lengkap sih hehe
jika sudah sukses next ke langkah selanjutnya, jika belum tutup laptop cari warteg, makan dulu wkwkwkwkw laper gan 💪
pertama kita buat file namanya main.go “pastilah gimana mau ngoding coba kalau ga ada filenya hihihihi”
kemudian kita buat structnya dulu, untuk apasih kita capek2 buat struct, yah gitu broo untuk biar keren wkwkw 😆, nggak struct nanti digunakan untuk repikasi data yang akan kita ambil kita buat dua struct saja berikut contohnyaaaaa

kemudian pilih alamat atau wesite yang akan kita `COLONG` datanya hehehe, kali ini saya menggunakan bbc.com akan tetapi untuk list beritanya jadi URLnya agak panjang hehehe dan berikut code untuk mengakses website menggunakan golang

untuk code http.Get digunakan untuk menghubungkan website yang akan kita ambil datanya, function tersebut mengembalikan 2 nilai, Response dan error, kemundian kondisi itu adalah checking apakah code kita berhasil terhubung dengan website tersebut atau tidak atau mungkin ada kemungkinan error yang lain, apakah tidak terhubung ke internet ataupun yang lain
lanjuuutttt dengan codiiiiinggg

untuk code diatas adalah berfungsi untuk mendapatkan semua file HTML yang ada di dalam website yang kita ambil, penggunaan fungsi “goquery” itu bukan dari code Golangnya akan tetapi dari repo kang “PuerkitoBio”, jika kepo apa aja daldam reponya silahkan
untuk di lihat di sini github.com/PuerkitoBio/goquery
kemudian cari data yang anda inginkan saya contohkan untuk alamat diatas saya akan mendapatkan list berita, gambar berita lek hehe

## Bagian Teliti yang saya tidak suka hehe

pada contoh kali ini yang akan saya ambil untuk data example adalah title dan content yang ada di list berita tersebut,langkahnya adalah pertama untuk cari class pada title tersebut untuk mencari classnya adalah shortkey “Ctrl+Shift+i” tekan secara bersamaan, kemudian akan tampil source HTML yang ada di website tersebut seperti contoh gambar dibawah ini



cari class yang akan diambil datanya, berikut contoh pencarian class, class yang akan dicari harus mencakup semua berita yang akan kita ambil, jadi logicnya adalah sesudah kita ambil semua HTML yang ada , kita cari class yang mencakup semua berita-berita yang akan kita ambil, jika sudah mengambil class yang berisikan data-datanya kemudian cari spesifik data yang akan kita ambil, berikut adalah contoh untuk pencarian classnya

jika sudah menemukan pencarian class yang mengandung semua konten yang akan kita ambil, maka implementasikan ke code golang

dalam contoh diatas adalah kita sudah menggunakan class eagle, dimana pada class eagle mengandung semua konten yang akan kita ambil, next cari class yang mengandung title dan content , yang akan kita ambil

next jika sudah mendapatkan class yang mengandung title dan content, masukkan kedalam code golang seperti berikut

dalam code golang diatas merupakan pengambilan title dan content kemudian dimasukkan kedalam array di struct, yang langkah berikutnya akan diubah menjadi json, atau bisa langsung dimasukkan ke dalam database yang dibutuhkan akan tetapi dalam kali ini saya akan mencontohkan diubah menjadi json
sekian dulu artikel dari saya, article ini tidak mengajarkan untuk mengolah data secara sepihak, article ini untuk bahan learning dan improving untuk newbi seperti saya hehehe ampun suhu, jika ada salah kata, itu memang sengaja hehe tapi saya minta maaf dan jangan dimasukkan kedalam hati
untuk sourcodenya bisa dilihat disini
