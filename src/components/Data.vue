<template>
  <Transition>
    <h2  v-show="zaman1"> A translator that has experience in academia, intergovernmental instutitions and commercial projects. </h2>
  </Transition>
  <Transition>
    <div class="mainContent"  v-show="zaman1">

      <div id="leftinfo">
      <img src="../assets/Picture1.jpg" alt="picture of mohammad"/>
      </div>
      <div id="rightinfo">
        <p>
          I am an Arabic/English <span class="important">sworn legal translator</span> and interpreter since 2008, and I worked with the <span class="important">United Nations Relief and Work Agency</span> (UNRWA) in Syria for 11 years, where I carried out different tasks and positions, such as a Public Information Officer deputy and Interpreter for UNRWA’s Front Office. 
        </p>
        <p>
          I hold a M.A. in Media Studies from Maastricht University FASOS. 
          In my thesis, I addressed the impact of telepresence technologies and social media platforms on the place attachment of Syrian refugees in the Netherlands. 
          The study touched upon other aspects of refugees’ life including integration.
          Academically, I am interested in migration studies, particularly education and integration. 
        </p>
      </div>
    </div>
  </Transition>
    <div v-show="zaman1">
      <div id="cvContainer">
          <h2 id="cv">Curriculum Vitae</h2>
          <iframe src="https://drive.google.com/file/d/1RfhyIu8QmUDMP9e8uO9A9y_0rAUDUxwn/preview" width="800" height="1100"></iframe>
      </div>

      <div id="address">
        <h2 id="contact">Contact</h2>
          <p>85C, Kasteel Hillenraadweg, Maastricht, 6222XS, The Netherlands</p>
          <p>0031684233631</p>
          <p><a href="mailto:Mohammad.khalaf@maastrichtuniversity.nl">Mohammad.khalaf@maastrichtuniversity.nl</a></p>
          <p><a href="mailto:makholland@gmail.com">makholland@gmail.com</a></p>
      </div>
      


    </div>
</template>
<script>
  export default{
          data(){
            return{
              zaman1: false
            }
          },
          methods:{
              isElemVisible (el) {                
                  var rect = el.getBoundingClientRect()
                  var elemTop = rect.top + 200 // 200 = buffer
                  var elemBottom = rect.bottom
                  return elemTop < window.innerHeight && elemBottom >= 0
              },
              handleScroll (evt){
                const cv=document.getElementById(`cvContainer`);
                const ad=document.getElementById(`address`);
                if (this.isElemVisible(cv)){
                  cv.style.opacity = '1'
                  cv.style.transform = 'scale(1)'
                }
                if (this.isElemVisible(ad)){
                  ad.style.opacity = '1'
                  ad.style.transform = 'scale(1)'
                  document.removeEventListener('scroll', this.handleScroll)
                }
              }
          },
          mounted(){         
            document.addEventListener('scroll', this.handleScroll);
            setTimeout(() =>this.zaman1=true, 1000);
            this.handleScroll();
          },
          unmounted(){
            document.removeEventListener('scroll', this.handleScroll)
          }
      }
</script>

<style>
  h2{
    color: #DBA664;
    max-width:min(1100px,90%);
    margin: 10px auto;
  }
  .mainContent{
    display:flex;
    max-width:1200px;
    gap:40px;
    margin: 20px auto;
    color: #FFEAC8;
  }

  #address{
    max-width:1200px;
    margin: 20px auto;
    color: #FFEAC8;
    opacity: 0;
    transition: opacity 1s ease;
  }

  #address ul{
    list-style-type:none;
  }

  #leftinfo{
    width:33%;
  }

  #leftinfo img{
    width:100%;
    border-radius:30px;
  }

  #rightinfo{
    width: 66%;
  }

  .important{
    color: #DBA664;
  }

  #cv{
    margin-top:60px;
    transition: opacity 1s ease;
  }

  #cvContainer{
    opacity: 0;
  }
  iframe{
    max-width:90%;
    /* onload="this.style.opacity=1;" style="opacity:0;border:none;"  */
    /* opacity: 0; */
    transition: 0.3s all ease-out;
  }

  @media screen and (max-width: 800px) {
    .mainContent{
      flex-direction:column;
      justify-content: center;
      align-items: center;
      margin: 0px;
    }
    #leftinfo{
      width:90%;
    }

    #rightinfo{
      width: 90%;
    }


  }
</style>