import React from 'react'
import "./faq.css"
import nurse from "./nurse.jpg"

function Faq() {
    return (
        <div class="inner-container">
            <div class="inner-content1">
                <div class="faq-box">
                    {/* <h5 style={{marginTop:".2in",fontSize:"14px", color:"blue"}}>FAQ</h5> */}
                    <h3 style={{marginTop:".5in",fontWeight:"600"}}>What is a ‘novel’ coronavirus?</h3>
                    <p style={{marginTop:".25in"}}>The disease caused by the novel coronavirus first identified in Wuhan, China, has been named coronavirus disease 2019 (COVID-19) – ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.
Formerly, this disease was referred to as ‘2019 novel coronavirus’ or ‘2019-nCoV.’

The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.</p>
                </div>
                <div class="faq-box2">
                    <h3 style={{fontWeight:"600"}}>Information</h3>
                    <div className="boxes">
                        <div className = "smallboxes">
                            <h4 style={{marginBottom:".5cm"}}>Symptoms of Corona Virus.</h4>
                            <div className="imagee" style={{marginBottom:"1.2cm",marginLeft:"-.2cm",backgroundImage:"url(https://www.knowsleynews.co.uk/wp-content/uploads/2020/10/covid-symptoms.jpg)",
                            backgroundSize:"cover"}}></div>
                            <h5 style={{fontWeight:"bolder"}}>Most Common Symptoms:</h5>
                            <ul>
                                <li>fever</li>
                                <hr />
                                <li>dry cough</li>
                                <hr />
                                <li>tiredness</li>
                                <hr />
                            </ul>
                            <h5 style={{fontWeight:"bolder",marginTop:"1cm"}}> Less Common Symptoms</h5>
                            <ul>
                                <li>aches and pains</li>
                                <hr />
                                <li>sore throat</li>
                                <hr />
                                <li>diarrhoea</li>
                            </ul>
                        </div>
                        <div className = "smallboxes">
                            <h4 style={{marginBottom:".5cm"}}>Prevention for Corona</h4>
                            <div className="imagee" style={{marginBottom:"1.2cm",backgroundImage:"url(https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/5d/5f/a8/covid-19-prevention-tips.jpg)",
                            backgroundSize:"cover"}}></div>
                            <ul>
                                <li>Maintain at least a 1-metre distance between yourself and others </li><hr/>
                                <li> Clean your hands often. Use soap and water, or an alcohol-based hand rub.
</li><hr/>
                                <li>Make wearing a mask a normal part of being around other people.</li><hr/>
                                <li>Get vaccinated when it’s your turn.</li>
                            </ul>
                        </div>
                        <div className = "smallboxes">
                            <h4 style={{marginBottom:".5cm"}}> Cure for Corona</h4>
                            <div className="imagee" style={{marginBottom:"1.2cm",backgroundImage:"url(https://azcapitoltimes.com/files/2021/03/Covid-vaccine.jpg)",backgroundSize:"cover"}}></div>
                            <ul>
                                <li >There is currently no cure for the corona virus. 
                                If you suspect you have the disease, go to the nearest 
                                hospital immediately.</li><hr/><li>Before leaving, 
wear a mask and wash your hands thoroughly. </li><hr/><li>Stay in a separate room from other family members, and if not possible, wear a medical mask.</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="FAQQ">
                    <img src={nurse} className="nurse"></img>
                    <div className="FAQQcontent">
                    <h5 style={{textAlign:"left", color:"#126fb4"}}>FAQ</h5> <h6 style={{color:"#248acc",fontWeight:"500",marginTop:".8cm"}}>HOW EFFECTIVE ARE MASKS AND DO THEY ALSO NEED TO COVER MY NOSE?</h6>
                    <p>Mask wearing is a very simple and effective way to reduce transmission and save lives. The degree of protection depends on the type of mask. 
</p> <hr/> <h6 style={{color:"#248acc",fontWeight:"500",marginTop:"0cm"}}>IS COVID-19 WORSE THAN FLU??</h6>
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
</p> <hr/><h6 style={{color:"#248acc",fontWeight:"500",marginTop:".8cm"}}>WHAT ARE THE RISKS OF RE-INFECTION?</h6>
                    <p>Even if you have had a test that detects antibodies, reinfection is still possible, although less likely.
</p> 
                    </div>
                     </div>
                </div>
                
            </div>
        </div>
    )
}

export default Faq
