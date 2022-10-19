import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';

import sapori from '../public/Products1.png';
import handshake from '../public/handshake.png';
import cloud_done from '../public/cloud_done.png';
import cycle from '../public/cycle.png';

function Products() {

    return (
        <div className="">
            <div style={{paddingTop: "50px", display: "flex"}}>
                <div className="">
                    <Tabs>
                        <div style={{display: "flex"}}>
                            <div style={{position: "fixed",height: "100vh",width: "200px", borderRight: "1px solid gray"}}>
                                <TabList style={{listStyle: "none", paddingLeft:"50px"}}>
                                    <Tab style={{margin: "20px 0"}}>sapori</Tab>
                                    <Tab style={{margin: "20px 0"}}>製品１</Tab>
                                    <Tab style={{margin: "20px 0"}}>製品２</Tab>
                                </TabList>
                            </div>
                            <div style={{marginLeft: "200px"}}>
                                <TabPanel>
                                    <div style={{textAlign:"center", margin: "0px 50px"}}>
                                       <Image src={sapori} width={1000} objectFit="contain" alt="sapori" />
                                       <div style={{borderBottom: "2px solid #0088D3", textAlign:"left", marginTop: "0px"}}>
                                            <div style={{fontSize: "23px", padding: "20px 0"}}>saporiとは</div>
                                        </div>
                                        <p style={{textAlign:"left"}}>　これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。</p>
                                        <div style={{display: "flex", alignItems:"center", justifyContent:"center", margin: "100px 50px"}}>
                                            <div style={{textAlign:"center", margin: "20px"}}>
                                                <Image src={cycle} width={70} objectFit="contain" alt="cycle" />
                                                <div style={{fontWeight: "bold", color: "#1A4F83"}}>目標と振り返りを促す</div>
                                                <p>PDCAサイクルを習慣化することによって、学生のキャリア教育をサポートします。</p>
                                            </div>
                                            <div style={{textAlign:"center", margin: "20px"}}>
                                            <Image src={handshake} width={70} objectFit="contain" alt="cycle" />
                                                <div style={{fontWeight: "bold", color: "#1A4F83"}}>先生と生徒をつなげる</div>
                                                <p>先生と生徒のコミュニケーションを円滑にすることで、より良い学習環境の形成を目指します。</p>
                                            </div>
                                            <div style={{textAlign:"center", margin: "20px"}}>
                                            <Image src={cloud_done} width={70} objectFit="contain" alt="cycle" />
                                                <div style={{fontWeight: "bold", color: "#1A4F83"}}>３年間のデータを保証</div>
                                                <p>データベースへ最大3年間のデータを記録しており、常にデータが復元可能です。</p>
                                            </div>
                                        </div>
                                        <div style={{borderBottom: "2px solid #0088D3", textAlign:"left", marginTop: "50px"}}>
                                            <div style={{fontSize: "23px", padding: "20px 0"}}>導入方法</div>
                                        </div>
                                        <p style={{textAlign:"left"}}>　これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。<br></br>これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。これは例文です。</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                        
                                        
                                </TabPanel>
                                <TabPanel>
                                        
                                        
                                </TabPanel>

                            </div>

                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
  }
  
  export default Products;
  