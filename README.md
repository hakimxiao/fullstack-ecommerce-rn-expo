bagaimana data auth dari clerk bisa langsung di simpan ke MONGO DB?
Dengan inngest | clerk melakukkan auth mengirim data -> ingest menangkap cache data dan meneruskan nya ke MONGO DB dari balik layar! : 1. Pada Clerk tepatnya pa header anda ke menu configure 2. kemudian pada side bar anda klik list Developers 3. Pada dropdown item anda silahkan pilih webhooks 5. pada endpoint anda silahkan klik add endpoint 6. pada button atas anda ganti dari webhook ke inngest 7. silahkan klik connect inngest akan muncul pop up dan silahkan di approve 8. setelah selesai anda akan diberikan url koneksi silahkan scroll kebawah klik tombol create 9. kembali ke configure clerk pada side bar kanan klik edit pill pada kontent Subscribed event kemudian disana anda cari user. 10. Pilih di bagian user created dan deleted jadi kita akan memantau event setiap pembuatan atau penghapusan user.

TIPS TRIK :
Jika anda ingin melakukkan implementasi antara auth dengan clerk kemudian inngest akan mengambil data pada clerk kemudian melakukkan penulisan ke DB mongodb, Silahkan anda putar di menit 1. 44. 00

BACKEND DEPLOY BY RAILLWAY :
https://fullstack-ecommerce-rn-expo-production.up.railway.app/api/health

ADMIN DEPLOY BY VERCEL :
https://fullstack-ecommerce-rn-expo.vercel.app/

QUERY :
pakai tanstack query

- ini bagus karena dengan tanstack kita dapat mempersingkat pembuatan state dimana cukup menggunakan hook tanstcak maka secara otomatis semua
  value yang dibutuhkan untuk membuat set sudah ada seperti error dan lainnya

CSS :
tailwindcss

UI :
daisy ui
TIPS! : - Daisy UI menyediakan banyak sekali tema dan jika kalian ingin merubah tema default caranya dengan menambahkan object pada setup
plugin di css kalian yaitu plugin disyui contoh :
@plugin "daisyui" {
themes: forest;
} - Kemudian di HTML utama project silahkan di buat <html lang="en" data-theme="forest"> sesuai dengan yang kalian setup - dokumenbtasi : https://daisyui.com/docs/themes/

npx expo prebuild digunakan untuk membuild aplikasi
kemudian npx expo run:android untuk membuild app nya

ERROR RUN ANDROID
