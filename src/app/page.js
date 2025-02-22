import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div
      className="h-screen relative">

        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/Arts_Chic_Logo_Alt.png"
        alt="alt arts chic logo"
        style={{height:"clamp(10rem,20vw,20rem)"}}/>

      </div>

      <div className="flex justify-center items-center gap-10 px-5 py-20 bg-cover bg-center"
      style={{backgroundImage:"url(/Section2_bg.png)"}}>

        <div className="flex flex-col gap-4 w-72">

          <div className="flex flex-col gap-1">

            <h1 className="font-extralight"
            style={{
              fontSize:"clamp(1.5rem,4vw,2.5rem)",
              lineHeight:0.8
            }}>

              NOT YOUR <br/> MOMMA'S

            </h1>

            <h1 className="font-bold bg-clip-text mix-blend-hard-light"
            style={{
              fontSize:"clamp(1.5rem,4vw,2.5rem)",
              lineHeight:0.8,
              color:"rgba(185,147,45,0.25)",
              backgroundImage:"url(/gold_texture.png)",
              backgroundPosition:"45% 70%",
            }}>
              MARKETING
            </h1>

          </div>

          <p className="font-light"
          style={{fontSize:"clamp(0.5rem,2vw,1rem)"}}>

            ARTS Chic is a <b>Full-Service</b> Marketing Agency that combines creativity, 
            flair and strategy to deliver exceptional results. With a passion for the arts 
            and a keen eye for details and innovation, we specialize in traditional and 
            digital marketing, event executions and public relations.
          
          </p>

        </div>

        <img src="/Arts_Chic_Logo_Alt.png" alt="alt arts chic logo"
        style={{height:"clamp(10rem,20vw,20rem)"}}/>

      </div>

      <div className="relative overflow-hidden">

        <div className="w-full mix-blend-hard-light"
        style={{
          backgroundColor:"#f1d16b",
          height:"clamp(20rem,60vw,28rem)"
        }}
        >
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 font-extrabold text-left text-black">
            
            <h1 className="ml-2"
            style={{fontSize:"clamp(1.75rem,9vw,3rem)",transform:"translateY(0.8rem)"}}>

              WE'RE

            </h1>

            <div className="bg-clip-text mix-blend-soft-light"
            style={{
              fontSize:"clamp(5rem,25vw,8rem)",
              lineHeight:"0.75",
              }}>

              <h1>BRA</h1>

              <h1>ZEN</h1>

            </div>
            

          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full bg-center bg-cover"
          style={{backgroundImage:"url(/broken_glass.png)"}}>

            <div className="mix-blend-screen w-full h-full bg-center bg-cover"
            style={{
              backgroundColor:"#f1d16b",
              backgroundImage:"url(/bold.png), linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.3) 100%)",
              maskImage:"url(/broken_glass.png)",
              maskPosition:"center",
              maskSize:"cover",
            }} />

          </div>


        </div>

        <img className=" absolute left-0 z-10"
        src="/torn_paper.png" alt="black torn paper texture"
        style={{bottom:"-28vw"}}
        />

      </div>

      <div className="px-5 p-10 relative z-10"
      style={{
        backgroundImage:"url(/torn_paper_bg.png)",
        backgroundSize:"cover",
        backgroundPositionX:"center"
      }}>
        
        <h1 className="text-center text-4xl font-light px-2">

          WE COVER <span className="font-bold bg-clip-text mix-blend-hard-light"
          style={{
            color:"rgba(185,147,45,0.25)",
            backgroundImage:"url(/gold_texture.png)",
            backgroundPosition:"60% 70%"
          }}>EVERYTHING</span>

        </h1>

        <div className="flex gap-4 justify-center items-center flex-wrap pt-10">

          {
          [
            [["Social Media","Management"],"/social_media_management_icon.png"],
            [["Event","Production"],"/event_production_icon.png"],
            [["Casting","Agency"],"/casting_agency_icon.png"],
            [["Public","Relations"],"/public_relations_icon.png"],
            [["Content","Creation"],"/content_creation_icon.png"],
            [["Film","Fixer"],"/film_fixer_icon.png"],
            [["Luxury","Concierge"],"/luxury_concierge_icon.png"],
            [["Marketing","Consultancy"],"/marketing_consultancy_icon.png"]
          ].map((item,index)=>{
            return (
              <div className="grid grid-rows-2 items-center self-center gap-1"
              key={index}>
                
                <img className="m-auto"
                src={item[1]} alt="icon"
                style={{height:"clamp(1.5rem,5vw,4rem)"}}/>

                <div className="flex flex-col gap-0"
                style={{lineHeight:"1"}}>

                  {
                  item[0].map((subitem,index)=>{
                    return (
                      <p
                      key={index}
                      className="text-center font-light"
                      style={{fontSize:"clamp(0.4rem,1.7vw,1rem)"}}>
                        {subitem}
                      </p>
                    )
                  })
                  }

                </div>
                

              </div>
            )
          })
          }

        </div>

      </div>

      <div className="px-5 py-10 flex justify-center items-center bg-cover bg-center"
      style={{backgroundImage:"url(/car_interior_bg.png)", height:"80vw"}}>

        <div className="flex gap-2 justify-center items-center bg-center bg-no-repeat"
        style={{background:"url(/box_shadow.png)", paddingBlock:"5.5vw", paddingInline:"2.5vw",backgroundSize:"100%"}}>

            <img src="/Arts_Chic_Logo_Alt.png" alt="alt arts chic logo"
            style={{height:"16vw"}}/>

            <div className="bg-white mx-1 rounded"
            style={{height:"16vw",width:"2px"}}/>

            <div className="flex flex-col text-tertiary text-lg font-normal"
            style={{fontSize:"5vw",lineHeight:0.8}}>

              <p>ARRIVE IN STYLE</p>
              <p>WITH OUR EXCLUSIVE</p>

              <p className="text-white font-extrabold">LUXURY CONCIERGE</p>
              
              <div className="flex gap-2 text-white">

                <p className="font-extrabold">SERVICE</p>

                <div className="flex flex-col font-thin"
                style={{fontSize:"clamp(0.45rem,2vw,2rem)", lineHeight:"clamp(0.65rem,2.5vw,2rem)"}}>

                  <p>MERCEDES BENZ</p>

                  <p style={{lineHeight:"1vw"}}>SPRINTER</p>

                </div>

              </div>

            </div>
              
        </div>

      </div>

      <div className="w-full bg-cover relative"
      style={{
        backgroundImage:"url(/Arts_Chic_Employees.png)",
        height:"50vw",
        backgroundPositionX:"5%"
      }}>

        <div className="flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 text-black font-light w-1/3"
        style={{fontSize:"5vw", lineHeight:"0.9"}}>

          <h1>

            WORLD <br/> CLASS <br/>

            <span className="font-extrabold bg-clip-text"
            style={{
              color:"rgba(255,249,59,0.05)",
              backgroundImage:"linear-gradient(to bottom, rgba(255,249,59,0.55) 0%, rgba(176,113,8,0.55) 100%),url(/gold_texture.png)",
              backgroundPosition:"90% 70.5%",
            }}>SERVICE</span>

          </h1>

          <p
          style={{
            fontSize:"1.9vw"
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. 
          </p>

        </div>

      </div>
      
      
    </div>
  );
}
