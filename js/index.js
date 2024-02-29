function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}
function displayPost(data) {
  const postId = document.getElementById('post');
  for (const post of data) {
    const div = document.createElement('div');
    div.classList.add(
      'bg-slate-500',
      'm-6',
      'rounded-xl',
      'text-[#ecf0f1]',
      'p-5',
      'text-2xl'
    );
    div.innerHTML = `
      <h1 class="text-3xl font-bold text-black">${post.title}</h1>
      <p>${post.body}</p>
    `;
    postId.appendChild(div);
    console.log(post);
  }
}
// loadPost();
