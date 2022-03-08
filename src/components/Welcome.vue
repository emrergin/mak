<template>
    <div class="welcomeContainer">
        <div class="welcometext" :class="{latin: sozcuk===0, arab: sozcuk===1}">
            {{welcometext[sozcuk].substr(0,mevcutHarf)}}
        </div>
    </div>
</template>

<script>
    
    export default{
        props: [`welcometext`],
        data(){
            return{
                mod: 0,
                sureler: [1500,1000],
                mevcutHarf: 0,
                sozcuk:0,
                sayac:0,
                maxsayac:40
            }
        },
        methods:{
            adim() {                
                if (this.mod===0){
                    if (this.mevcutHarf<this.welcometext[this.sozcuk].length){
                        this.mevcutHarf=this.mevcutHarf+1;
                    }else{
                        if (this.sayac===this.maxsayac){
                            this.mod=1;
                            this.sayac=0;
                        }
                        else{
                            this.sayac=this.sayac+1;
                        }
                    }
                }else{
                    if (this.mevcutHarf>0 ){
                        this.mevcutHarf=this.mevcutHarf-1;
                    }else{
                        this.mod=0;
                        this.sozcuk=(this.sozcuk+1)%this.welcometext.length;
                    }
                }
                // setTimeout(fonk2,this.sureler[this.mod]);
            }
        },
        mounted(){            
            setInterval(this.adim,200);      
        }
    }
</script>

<style >
    .welcomeContainer{
        background-color: #090909;
        padding-top:30px;
        padding-left:20px;        
        margin:0px;
        width:100%;
        height: 240px;
        position: relative;
    }
    .welcometext{
        color: #FFCB91;
        font-size: 200px;
        text-shadow: 5px 5px #A09081;
        margin:0px;        
        position: absolute;
        opacity:0.4;
    }

    .welcometext.latin{
        left:10%;
    }

    .welcometext.arab{
        /* left: calc(100% - 400px); */
        right:10%;
        top:-40px;
        font-family:"Calibri, sans-serif";
    }

    @media screen and (max-width: 800px) {
        .welcometext.latin{
            left: 0; 
            right: 0; 
            margin-left: auto; 
            margin-right: auto; 
        }
            .welcometext.arab{
            /* left: calc(100% - 400px); */
            left: 0; 
            right: 0; 
            margin-left: auto; 
            margin-right: auto; 
        }
    }

</style>