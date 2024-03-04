
const LoadPost = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts);
}
 
const displayPosts = posts =>{
//    console.log(posts);
   posts.forEach(post => {
      //  console.log(post);
       const postContainer = document.getElementById('post-container');
      //  postContainer.textContent=''
       const postsCard = document.createElement('div');
       postsCard.classList = `hero p-6 rounded-3xl mt-8 bg-base-200`;
       postsCard.innerHTML =`
       <div class="lg:hero-content  flex flex-col lg:flex-row gap-10">
                          <img src="${post.image}" class="max-w-[100px] max-h-[100px] mb-2 rounded-lg shadow-2xl" />
                          <div>
                            <div class="flex gap-32">
                              <p>#${post.category}</p>
                              <p>Author:${post.author.name}</p>
                              <hr>
                            </div>
                            <div class="max-w-[250px] lg:max-w-[500px]">
                            <h1 class="text-xl lg:text-3xl font-bold">${post.title}</h1>
                            <p class="lg:py-6 ">${post.description}</p>
                            </div>
                            <hr>
                            <!-- icons div  -->
                            <div class="flex gap-20 lg:justify-between">
                                 <div class="flex flex-col lg:flex-row gap-10 lg:gap-32 m-6">
                                <div class="flex gap-2">
                                    <img class="w-5" src="images/text.png" alt="">
                                    <p>${post.comment_count}</p>
                                 </div>
                                 <div class="flex gap-2">
                                    <img class="w-5" src="images/view.png" alt="">
                                    <p>${post.view_count}</p>
                                 </div>
                                 <div class="flex gap-2">
                                    <img class="w-5" src="images/time.png" alt="">
                                    <p>${post.posted_time}</p>
                                 </div>
                                </div>
                                <div class="mt-6">
                                    <button onClick="countPost('${post.category}')" class=""><img class="w-10" src="images/msg.png" alt=""></button>
                                 </div>
                            </div>
                          </div>
                        </div>
       `
       postContainer.appendChild(postsCard);
   });
  //  toggleSpinnerLoading(false);
}

// latest post 

const LoadLatestPost = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const datas = await res.json();
    // const posts = data.array
    // console.log(datas);
    displayLatestPosts(datas);
}
const displayLatestPosts = data =>{
  data.forEach(data =>{
    // console.log(data);
    const latestContainer = document.getElementById('latest-container');
    const latestCard = document.createElement('div');
    latestCard.classList=`card w-96 bg-base-100 shadow-xl`;
    latestCard.innerHTML=`
    <figure class="px-10 pt-10">
                <img src="${data.cover_image}" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body  text-start">
                <div class="flex">
                  <img class="w-6" src="images/calender.png" alt="">
                  <p class="text-x">${data.author.posted_date}</p>
                </div>
                <h2 class="card-title">${data.title}</h2>
                <p>${data.description}.</p>
                <div class="card-actions flex mt-5">
                  <img class="w-14 rounded-full" src="${data.profile_image}" alt="">
                  <div>
                    <h3 class="text-xl font-bold">${data.author.name}</h3>
                    <p>${data.author.designation}</p>
                  </div>
                </div>
              </div>
    `;
    latestContainer.appendChild(latestCard);

  })


}
LoadLatestPost();

// all post count 
const countPost = async(category) =>{
  console.log('clicked' , category);
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
  const data = await res.json();
  const posts = data.posts;
  // console.log(data.posts);
  displayCount(posts);
}

const displayCount = post => {
         console.log(post);
         post.forEach(post => {
         const countContainer = document.getElementById('count-container');
        //  countContainer.innerText = post.title;
         const countCard = document.createElement('div');
         countCard.classList =`flex justify-between bg-white p-6 mt-5 shadow-2xl rounded-2xl`;
         countCard.innerHTML = ` 
         <h2 class="text-xl text-semibold">${post.title}</h2>
                      <div class="flex gap-2">
                        <img class="w-6" src="images/view.png" alt="">
                        <p class="">${post.view_count}</p>
                      </div>
         `
        countContainer.appendChild(countCard);
      })

}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchPost(searchText);
}
const searchPost = async(searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
  const data = await res.json();
  const posts = data.posts;
  toggleSpinnerLoading(true);
  // console.log(data);
  displaySearchPosts(posts);
}
const displaySearchPosts = posts =>{
     posts.forEach(post => {
         const postContainer = document.getElementById('post-container');
         postContainer.textContent='';
         const postsCard = document.createElement('div');
         postsCard.classList = `hero p-6 rounded-3xl mt-8 bg-base-200`;
         postsCard.innerHTML =`
         <div class="lg:hero-content  flex flex-col lg:flex-row gap-10">
                            <img src="${post.image}" class="max-w-[100px] max-h-[100px] mb-2 rounded-lg shadow-2xl" />
                            <div>
                              <div class="flex gap-32">
                                <p>#${post.category}</p>
                                <p>Author:${post.author.name}</p>
                                <hr>
                              </div>
                              <div class="max-w-[250px] lg:max-w-[500px]">
                              <h1 class=" lg:text-3xl font-bold">${post.title}</h1>
                              <p class="lg:py-6 ">${post.description}</p>
                              </div>
                              <hr> 
                              <!-- icons div  -->
                              <div class="flex gap-20 lg:justify-between">
                                   <div class="flex flex-col lg:flex-row gap-10 lg:gap-32 m-6">
                                  <div class="flex gap-2">
                                      <img class="w-5" src="images/text.png" alt="">
                                      <p>${post.comment_count}</p>
                                   </div>
                                   <div class="flex gap-2">
                                      <img class="w-5" src="images/view.png" alt="">
                                      <p>${post.view_count}</p>
                                   </div>
                                   <div class="flex gap-2">
                                      <img class="w-5" src="images/time.png" alt="">
                                      <p>${post.posted_time}</p>
                                   </div>
                                  </div>
                                  <div class="mt-6">
                                      <button onClick="countPost('${post.category}')" class=""><img class="w-10" src="images/msg.png" alt=""></button>
                                   </div>
                              </div>
                            </div>
                          </div>
                           `
         postContainer.appendChild(postsCard);
        
     });
      toggleSpinnerLoading(false);
  }
const toggleSpinnerLoading = (isLoading) =>{
  const loading = document.getElementById('loading');
  if(isLoading){
    loading.classList.remove('hidden');
  }
  else{
    loading.classList.add('hidden');
  }
}

LoadPost();