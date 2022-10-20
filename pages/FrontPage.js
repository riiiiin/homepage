import fv from '../public/fv.png';
import arrow from '../public/arrow.png';
import circle from '../public/circle.png';
import column1 from '../public/column1.png';
import Image from 'next/image';



function FrontPage({ posts }) {
    console.log("posts:",posts)
  const main = {
    paddingTop: "80px"
  }
  const title = {
    color: "#0088D3",
    fontFamily: "'Fredoka One', cursive",
  }

  return (
    <div className="overflow-x-hidden">
      <div className="pt-20">
      <Image
            src={fv}
            width={1400}
            height={300}
            alt={fv}
            style={{width: "100vw"}}
          />
        <div className="text-center mt-5" >
          <div className="text-8xl font-bold" style={title}>aveila</div>
          <p className="">あなたとともに、未来を語ります。</p>
        </div>
        <div className="text-center m-20" >
            <Image
                src={arrow}
                width={60}
                objectFit="contain"
                alt={arrow}
            />
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">製品紹介</div>
          <p className="">Availaでは、学生の私たちだからこそ感じる教育の課題を<br></br>学生目線で解決する様々なサービスを提供しています。</p>
          <div className="sm:flex items-center justify-center mt-7">
            <div className="text-center m-7" >
                <Image
                    src={circle}
                    width={200}
                    objectFit="contain"
                    alt={circle}
                />
              <p className="">キャリアパスポートの<br></br>Webアプリ化</p>
            </div>
            <div className="text-center m-7" >
                <Image
                    src={circle}
                    width={200}
                    objectFit="contain"
                    alt={circle}
                />
              <p className="">キャリアパスポートの<br></br>Webアプリ化</p>
            </div>
            <div className="text-center m-7" >
                <Image
                    src={circle}
                    width={200}
                    objectFit="contain"
                    alt={circle}
                />
              <p className="">キャリアパスポートの<br></br>Webアプリ化</p>
            </div>
          </div>
        </div>
        <div className="mt-36 max-w-4xl mx-auto">
          <div className="sm:flex" style={{borderBottom: "2px solid #0088D3", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{fontWeight: "bold", fontSize: "25px",} }>コラム</div>
            <p style={{}}>ソフトウェア開発のための基礎知識や実践的なノウハウを解説しています。</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FrontPage;
