// Buat variabel untuk menyimpan data blog

let blogs = [];


// FUNCTION : UNTUK MEMBUAT SUATU PERINTAH
function addBlog(event){

  event.preventDefault(); // UNTUK MENCEGAH HALAMAN MEKAKUKAN REFRESH SAAT FORM DI SUBMIT !
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);//untuk ambil gambar
  const blog = {
    blogTitle: title,
    blogContent: content,
    blogImage: image
  };

  blogs.push(blog);
  console.log(blogs);
  renderBlog();
}

function renderBlog(){
  let contentContainer = document.getElementById('content');

  contentContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img
              src="${blogs[i].blogImage}"
              alt="blog-image"
            />
          </div>
          <div class="blog-content">
            <h2>${blogs[i].blogTitle}</h2>
            <span class="detail-blog"> 17 Desember 2024 10:00 | Author </span>
            <p>
              ${blogs[i].blogContent}
            </p>
          </div>
        </div>`;
    
  }
}
