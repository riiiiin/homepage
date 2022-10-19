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
      <div className="pt-20 flex items-center text-center justify-center text-4xl h-screen">
            現在作成中です。<br></br>
            もうしばらくお待ちください。
      </div>
    </div>
  );
}

export default FrontPage;
