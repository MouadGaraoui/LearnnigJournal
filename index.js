const read=document.getElementById("button")
read.addEventListener('click',function(){
    document.getElementById('article').innerHTML=`
    <div class='article'>
    <p class="date">JULY 23, 2022</p>
            <h1 id="button">My new journey as a bootcamp student.</h1>
            <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            <img src='images/article-image-hero.png' width="100%"/>
             <h3>How I stay committed to learning</h3>
            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
            <p class='space'>space    </p>
              <p> While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                <h3 class='recent'>Recent posts</h3>
            </div> 
    `
     document.getElementById('article').style.background = 'white'
     document.getElementById('article').style.color = 'black'
    document.getElementById("blogs").innerHTML=`
    <div class="blog">
                    <img src='images/article-image-03.png' width="180px"/>
                    <p>JULY 23, 2022</p>
                    <h3>Blog one</h3>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                <div class="blog">
                    <img src='images/article-image-02.png' width="180px"/>
                    <p>JULY 23, 2022</p>
                    <h3>Blog two</h3>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                <div class="blog">
                    <img src='images/article-image-01.png' width="180px"/>
                    <p>JULY 23, 2022</p>
                    <h3>Blog three</h3>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
    `
})