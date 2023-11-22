import styled from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";
import HeaderSection from "components/HeaderSection";
// Images
import mainillustration from "../images/illustration.png";
import profilecreation from "../images/profile-creation.png";
import library from "../images/library.png";
import silverswan from "../images/books/TheSilverSwan.jpg";
import sequisermudaromundo from "../images/books/SeQuiserMudaroMundo.jpg";
import vermelhobrancosangueazul from "../images/books/VermelhoBrancoeSangueAzul.jpg";
import lupin from "../images/books/lupin.jpg";
import ladykillers from "../images/books/LadyKillers.png";








const HeroSection = styled.div`
  width: 1600px;
  height: 650px;
  flex-shrink: 0;
  border-radius: 62px;
  border-bottom-left-radius: 80px;
  background: linear-gradient(106deg, rgba(58, 57, 103, 0.90) 41.28%, rgba(242, 114, 165, 0.50) 238.72%);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  margin-top: 75px;
  display: flex;
  flex-direction: row;
`;

const HeroIllustration = styled.img`
  width: 30%;
  display: flex;
  margin-left: -21px;
  margin-top: 36.5px;
`;

const Btext = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 150px;
`;


const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;




const Ltext = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 20px;
`;

const Offers = styled.div`
  cursor: pointer;
  color: #FFF;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 118px;
  height: 38px;
  flex-shrink: 0;
  background-color: #F78310;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 40px;
`;

const HeroOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileEdit = styled.div`
  width: 351px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #FBF8F5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;

const BoxOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const BigOptions = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SmallOptions = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
`;

const Pcicon = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 25px;
`;

const LibraryIcon = styled.div`
  width: 150px;
  height: 150px;
  margin-top: -15px;
  margin-right: -30px;
`;




const Products = styled.div`
  width: 150px;
  height: 150px;
  margin-top: -15px;
  margin-right: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25vw;
`;




const BooksOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 25px;
    margin: 0 auto;
`;



const Book = styled.div`
    width: 40%;
    margin: 20px;
`;



const Rate = styled.div`
 margin-left: 20px;
`;



const BookName = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 20px;
`;




const Price = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 20px;
    margin-top: 5px;
`;

const DownPrice = styled.div`
    color: #F78310;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 20px;
    margin-top: 5px;
`;


const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin: 5vw;
`;




const ProductsTitle = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 50px;
    margin-bottom: 15px;
    margin-left: 250px;
    white-space: nowrap;
`;


const Line = styled.footer`
width: 1500px;
height: 1px;
background-color: gray;
`


const ProductsSubTitle = styled.div`
     color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 250px;
    white-space: nowrap;
`;









export default function Home() {
  return (
    <div>
      <Header />
      <HeaderSection/>
    <Body>
      <main>
        <HeroSection>
          <HeroIllustration src={mainillustration} alt="" />
          <div className="hero-text">
            <Btext>Embarque no mundo da imaginação</Btext>
            <Ltext>
              Seja você um ávido leitor ou apenas esteja começando a
              descobrir o encanto das palavras impressas, este é o lugar onde as
              palavras saltam das páginas para dar vida a mundos desconhecidos e personagens inesquecíveis.
            </Ltext>
            <Offers id="link">Ofertas</Offers>
          </div>
          <HeroOptions>
            <a href="https://leve-book-mewb.vercel.app/html/aceitar-termos.html">
              <ProfileEdit>
                <Pcicon src={profilecreation} alt="" />
                <BoxOptions>
                  <BigOptions>Crie seu Perfil!</BigOptions>
                  <SmallOptions>Comece sua jornada em busca de conhecimento</SmallOptions>
                </BoxOptions>
              </ProfileEdit>
            </a>
            <a href="pesquisar.html">
              <ProfileEdit>
                <LibraryIcon src={library} />
                <BoxOptions>
                  <BigOptions>Veja a biblioteca!</BigOptions>
                  <SmallOptions>Clique e se aventure com nossos produtos</SmallOptions>
                </BoxOptions>
              </ProfileEdit>
            </a>
          </HeroOptions>
        </HeroSection>


        
        <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                
                
                
                <BooksOptions>


                    <Options>
                        <Book src={silverswan}/>
                        <Rate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                <path d="M9.08364 2.09743C9.43295 1.2979 10.567 1.2979 10.9164 2.09743L12.8837 6.60033C12.9845 6.83119 13.1688 7.01547 13.3997 7.11634L17.9026 9.08364C18.7021 9.43295 18.7021 10.567 17.9026 10.9164L13.3997 12.8837C13.1688 12.9845 12.9845 13.1688 12.8837 13.3997L10.9164 17.9026C10.567 18.7021 9.43295 18.7021 9.08364 17.9026L7.11634 13.3997C7.01547 13.1688 6.83119 12.9845 6.60033 12.8837L2.09743 10.9164C1.2979 10.567 1.2979 9.43295 2.09743 9.08364L6.60033 7.11634C6.83119 7.01547 7.01547 6.83119 7.11634 6.60033L9.08364 2.09743Z" fill="#FFC700"/>
                                <path d="M34.0836 2.09743C34.433 1.2979 35.567 1.2979 35.9164 2.09743L37.8837 6.60033C37.9845 6.83119 38.1688 7.01547 38.3997 7.11634L42.9026 9.08364C43.7021 9.43295 43.7021 10.567 42.9026 10.9164L38.3997 12.8837C38.1688 12.9845 37.9845 13.1688 37.8837 13.3997L35.9164 17.9026C35.567 18.7021 34.433 18.7021 34.0836 17.9026L32.1163 13.3997C32.0155 13.1688 31.8312 12.9845 31.6003 12.8837L27.0974 10.9164C26.2979 10.567 26.2979 9.43295 27.0974 9.08364L31.6003 7.11634C31.8312 7.01547 32.0155 6.83119 32.1163 6.60033L34.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M59.0836 2.09743C59.433 1.2979 60.567 1.2979 60.9164 2.09743L62.8837 6.60033C62.9845 6.83119 63.1688 7.01547 63.3997 7.11634L67.9026 9.08364C68.7021 9.43295 68.7021 10.567 67.9026 10.9164L63.3997 12.8837C63.1688 12.9845 62.9845 13.1688 62.8837 13.3997L60.9164 17.9026C60.567 18.7021 59.433 18.7021 59.0836 17.9026L57.1163 13.3997C57.0155 13.1688 56.8312 12.9845 56.6003 12.8837L52.0974 10.9164C51.2979 10.567 51.2979 9.43295 52.0974 9.08364L56.6003 7.11634C56.8312 7.01547 57.0155 6.83119 57.1163 6.60033L59.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M84.0836 2.09743C84.433 1.2979 85.567 1.2979 85.9164 2.09743L87.8837 6.60033C87.9845 6.83119 88.1688 7.01547 88.3997 7.11634L92.9026 9.08364C93.7021 9.43295 93.7021 10.567 92.9026 10.9164L88.3997 12.8837C88.1688 12.9845 87.9845 13.1688 87.8837 13.3997L85.9164 17.9026C85.567 18.7021 84.433 18.7021 84.0836 17.9026L82.1163 13.3997C82.0155 13.1688 81.8312 12.9845 81.6003 12.8837L77.0974 10.9164C76.2979 10.567 76.2979 9.43295 77.0974 9.08364L81.6003 7.11634C81.8312 7.01547 82.0155 6.83119 82.1163 6.60033L84.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M109.084 2.09743C109.433 1.2979 110.567 1.2979 110.916 2.09743L112.884 6.60033C112.985 6.83119 113.169 7.01547 113.4 7.11634L117.903 9.08364C118.702 9.43295 118.702 10.567 117.903 10.9164L113.4 12.8837C113.169 12.9845 112.985 13.1688 112.884 13.3997L110.916 17.9026C110.567 18.7021 109.433 18.7021 109.084 17.9026L107.116 13.3997C107.015 13.1688 106.831 12.9845 106.6 12.8837L102.097 10.9164C101.298 10.567 101.298 9.43295 102.097 9.08364L106.6 7.11634C106.831 7.01547 107.015 6.83119 107.116 6.60033L109.084 2.09743Z" fill="#FFC700"/>
                              </svg>
                        </Rate>
                        <BookName> The Silver Swan</BookName>
                        <Price>R$ 42,57</Price>
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                        <Rate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                <path d="M9.08364 2.09743C9.43295 1.2979 10.567 1.2979 10.9164 2.09743L12.8837 6.60033C12.9845 6.83119 13.1688 7.01547 13.3997 7.11634L17.9026 9.08364C18.7021 9.43295 18.7021 10.567 17.9026 10.9164L13.3997 12.8837C13.1688 12.9845 12.9845 13.1688 12.8837 13.3997L10.9164 17.9026C10.567 18.7021 9.43295 18.7021 9.08364 17.9026L7.11634 13.3997C7.01547 13.1688 6.83119 12.9845 6.60033 12.8837L2.09743 10.9164C1.2979 10.567 1.2979 9.43295 2.09743 9.08364L6.60033 7.11634C6.83119 7.01547 7.01547 6.83119 7.11634 6.60033L9.08364 2.09743Z" fill="#FFC700"/>
                                <path d="M34.0836 2.09743C34.433 1.2979 35.567 1.2979 35.9164 2.09743L37.8837 6.60033C37.9845 6.83119 38.1688 7.01547 38.3997 7.11634L42.9026 9.08364C43.7021 9.43295 43.7021 10.567 42.9026 10.9164L38.3997 12.8837C38.1688 12.9845 37.9845 13.1688 37.8837 13.3997L35.9164 17.9026C35.567 18.7021 34.433 18.7021 34.0836 17.9026L32.1163 13.3997C32.0155 13.1688 31.8312 12.9845 31.6003 12.8837L27.0974 10.9164C26.2979 10.567 26.2979 9.43295 27.0974 9.08364L31.6003 7.11634C31.8312 7.01547 32.0155 6.83119 32.1163 6.60033L34.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M59.0836 2.09743C59.433 1.2979 60.567 1.2979 60.9164 2.09743L62.8837 6.60033C62.9845 6.83119 63.1688 7.01547 63.3997 7.11634L67.9026 9.08364C68.7021 9.43295 68.7021 10.567 67.9026 10.9164L63.3997 12.8837C63.1688 12.9845 62.9845 13.1688 62.8837 13.3997L60.9164 17.9026C60.567 18.7021 59.433 18.7021 59.0836 17.9026L57.1163 13.3997C57.0155 13.1688 56.8312 12.9845 56.6003 12.8837L52.0974 10.9164C51.2979 10.567 51.2979 9.43295 52.0974 9.08364L56.6003 7.11634C56.8312 7.01547 57.0155 6.83119 57.1163 6.60033L59.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M84.0836 2.09743C84.433 1.2979 85.567 1.2979 85.9164 2.09743L87.8837 6.60033C87.9845 6.83119 88.1688 7.01547 88.3997 7.11634L92.9026 9.08364C93.7021 9.43295 93.7021 10.567 92.9026 10.9164L88.3997 12.8837C88.1688 12.9845 87.9845 13.1688 87.8837 13.3997L85.9164 17.9026C85.567 18.7021 84.433 18.7021 84.0836 17.9026L82.1163 13.3997C82.0155 13.1688 81.8312 12.9845 81.6003 12.8837L77.0974 10.9164C76.2979 10.567 76.2979 9.43295 77.0974 9.08364L81.6003 7.11634C81.8312 7.01547 82.0155 6.83119 82.1163 6.60033L84.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M109.084 2.09743C109.433 1.2979 110.567 1.2979 110.916 2.09743L112.884 6.60033C112.985 6.83119 113.169 7.01547 113.4 7.11634L117.903 9.08364C118.702 9.43295 118.702 10.567 117.903 10.9164L113.4 12.8837C113.169 12.9845 112.985 13.1688 112.884 13.3997L110.916 17.9026C110.567 18.7021 109.433 18.7021 109.084 17.9026L107.116 13.3997C107.015 13.1688 106.831 12.9845 106.6 12.8837L102.097 10.9164C101.298 10.567 101.298 9.43295 102.097 9.08364L106.6 7.11634C106.831 7.01547 107.015 6.83119 107.116 6.60033L109.084 2.09743Z" fill="#FFC700"/>
                              </svg>
                        </Rate>
                        <BookName> Se Quiser Mudar o M...</BookName>
                        <Price>R$ 27,99</Price>
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                        <Rate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                <path d="M9.08364 2.09743C9.43295 1.2979 10.567 1.2979 10.9164 2.09743L12.8837 6.60033C12.9845 6.83119 13.1688 7.01547 13.3997 7.11634L17.9026 9.08364C18.7021 9.43295 18.7021 10.567 17.9026 10.9164L13.3997 12.8837C13.1688 12.9845 12.9845 13.1688 12.8837 13.3997L10.9164 17.9026C10.567 18.7021 9.43295 18.7021 9.08364 17.9026L7.11634 13.3997C7.01547 13.1688 6.83119 12.9845 6.60033 12.8837L2.09743 10.9164C1.2979 10.567 1.2979 9.43295 2.09743 9.08364L6.60033 7.11634C6.83119 7.01547 7.01547 6.83119 7.11634 6.60033L9.08364 2.09743Z" fill="#FFC700"/>
                                <path d="M34.0836 2.09743C34.433 1.2979 35.567 1.2979 35.9164 2.09743L37.8837 6.60033C37.9845 6.83119 38.1688 7.01547 38.3997 7.11634L42.9026 9.08364C43.7021 9.43295 43.7021 10.567 42.9026 10.9164L38.3997 12.8837C38.1688 12.9845 37.9845 13.1688 37.8837 13.3997L35.9164 17.9026C35.567 18.7021 34.433 18.7021 34.0836 17.9026L32.1163 13.3997C32.0155 13.1688 31.8312 12.9845 31.6003 12.8837L27.0974 10.9164C26.2979 10.567 26.2979 9.43295 27.0974 9.08364L31.6003 7.11634C31.8312 7.01547 32.0155 6.83119 32.1163 6.60033L34.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M59.0836 2.09743C59.433 1.2979 60.567 1.2979 60.9164 2.09743L62.8837 6.60033C62.9845 6.83119 63.1688 7.01547 63.3997 7.11634L67.9026 9.08364C68.7021 9.43295 68.7021 10.567 67.9026 10.9164L63.3997 12.8837C63.1688 12.9845 62.9845 13.1688 62.8837 13.3997L60.9164 17.9026C60.567 18.7021 59.433 18.7021 59.0836 17.9026L57.1163 13.3997C57.0155 13.1688 56.8312 12.9845 56.6003 12.8837L52.0974 10.9164C51.2979 10.567 51.2979 9.43295 52.0974 9.08364L56.6003 7.11634C56.8312 7.01547 57.0155 6.83119 57.1163 6.60033L59.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M84.0836 2.09743C84.433 1.2979 85.567 1.2979 85.9164 2.09743L87.8837 6.60033C87.9845 6.83119 88.1688 7.01547 88.3997 7.11634L92.9026 9.08364C93.7021 9.43295 93.7021 10.567 92.9026 10.9164L88.3997 12.8837C88.1688 12.9845 87.9845 13.1688 87.8837 13.3997L85.9164 17.9026C85.567 18.7021 84.433 18.7021 84.0836 17.9026L82.1163 13.3997C82.0155 13.1688 81.8312 12.9845 81.6003 12.8837L77.0974 10.9164C76.2979 10.567 76.2979 9.43295 77.0974 9.08364L81.6003 7.11634C81.8312 7.01547 82.0155 6.83119 82.1163 6.60033L84.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M109.084 2.09743C109.433 1.2979 110.567 1.2979 110.916 2.09743L112.884 6.60033C112.985 6.83119 113.169 7.01547 113.4 7.11634L117.903 9.08364C118.702 9.43295 118.702 10.567 117.903 10.9164L113.4 12.8837C113.169 12.9845 112.985 13.1688 112.884 13.3997L110.916 17.9026C110.567 18.7021 109.433 18.7021 109.084 17.9026L107.116 13.3997C107.015 13.1688 106.831 12.9845 106.6 12.8837L102.097 10.9164C101.298 10.567 101.298 9.43295 102.097 9.08364L106.6 7.11634C106.831 7.01547 107.015 6.83119 107.116 6.60033L109.084 2.09743Z" fill="#FFC700"/>
                              </svg>
                        </Rate>
                        <BookName> Vermelho Branco e S...</BookName>
                        <Price>R$ 20,17</Price>
                    </Options>

                    <Options>
                        <Book src={lupin}/>
                        <Rate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                <path d="M9.08364 2.09743C9.43295 1.2979 10.567 1.2979 10.9164 2.09743L12.8837 6.60033C12.9845 6.83119 13.1688 7.01547 13.3997 7.11634L17.9026 9.08364C18.7021 9.43295 18.7021 10.567 17.9026 10.9164L13.3997 12.8837C13.1688 12.9845 12.9845 13.1688 12.8837 13.3997L10.9164 17.9026C10.567 18.7021 9.43295 18.7021 9.08364 17.9026L7.11634 13.3997C7.01547 13.1688 6.83119 12.9845 6.60033 12.8837L2.09743 10.9164C1.2979 10.567 1.2979 9.43295 2.09743 9.08364L6.60033 7.11634C6.83119 7.01547 7.01547 6.83119 7.11634 6.60033L9.08364 2.09743Z" fill="#FFC700"/>
                                <path d="M34.0836 2.09743C34.433 1.2979 35.567 1.2979 35.9164 2.09743L37.8837 6.60033C37.9845 6.83119 38.1688 7.01547 38.3997 7.11634L42.9026 9.08364C43.7021 9.43295 43.7021 10.567 42.9026 10.9164L38.3997 12.8837C38.1688 12.9845 37.9845 13.1688 37.8837 13.3997L35.9164 17.9026C35.567 18.7021 34.433 18.7021 34.0836 17.9026L32.1163 13.3997C32.0155 13.1688 31.8312 12.9845 31.6003 12.8837L27.0974 10.9164C26.2979 10.567 26.2979 9.43295 27.0974 9.08364L31.6003 7.11634C31.8312 7.01547 32.0155 6.83119 32.1163 6.60033L34.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M59.0836 2.09743C59.433 1.2979 60.567 1.2979 60.9164 2.09743L62.8837 6.60033C62.9845 6.83119 63.1688 7.01547 63.3997 7.11634L67.9026 9.08364C68.7021 9.43295 68.7021 10.567 67.9026 10.9164L63.3997 12.8837C63.1688 12.9845 62.9845 13.1688 62.8837 13.3997L60.9164 17.9026C60.567 18.7021 59.433 18.7021 59.0836 17.9026L57.1163 13.3997C57.0155 13.1688 56.8312 12.9845 56.6003 12.8837L52.0974 10.9164C51.2979 10.567 51.2979 9.43295 52.0974 9.08364L56.6003 7.11634C56.8312 7.01547 57.0155 6.83119 57.1163 6.60033L59.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M84.0836 2.09743C84.433 1.2979 85.567 1.2979 85.9164 2.09743L87.8837 6.60033C87.9845 6.83119 88.1688 7.01547 88.3997 7.11634L92.9026 9.08364C93.7021 9.43295 93.7021 10.567 92.9026 10.9164L88.3997 12.8837C88.1688 12.9845 87.9845 13.1688 87.8837 13.3997L85.9164 17.9026C85.567 18.7021 84.433 18.7021 84.0836 17.9026L82.1163 13.3997C82.0155 13.1688 81.8312 12.9845 81.6003 12.8837L77.0974 10.9164C76.2979 10.567 76.2979 9.43295 77.0974 9.08364L81.6003 7.11634C81.8312 7.01547 82.0155 6.83119 82.1163 6.60033L84.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M109.084 2.09743C109.433 1.2979 110.567 1.2979 110.916 2.09743L112.884 6.60033C112.985 6.83119 113.169 7.01547 113.4 7.11634L117.903 9.08364C118.702 9.43295 118.702 10.567 117.903 10.9164L113.4 12.8837C113.169 12.9845 112.985 13.1688 112.884 13.3997L110.916 17.9026C110.567 18.7021 109.433 18.7021 109.084 17.9026L107.116 13.3997C107.015 13.1688 106.831 12.9845 106.6 12.8837L102.097 10.9164C101.298 10.567 101.298 9.43295 102.097 9.08364L106.6 7.11634C106.831 7.01547 107.015 6.83119 107.116 6.60033L109.084 2.09743Z" fill="#FFC700"/>
                              </svg>
                        </Rate>
                        <BookName> Arsène Lupin: O Lad...</BookName>
                        <Price>R$ 16,49</Price>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                        <Rate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                <path d="M9.08364 2.09743C9.43295 1.2979 10.567 1.2979 10.9164 2.09743L12.8837 6.60033C12.9845 6.83119 13.1688 7.01547 13.3997 7.11634L17.9026 9.08364C18.7021 9.43295 18.7021 10.567 17.9026 10.9164L13.3997 12.8837C13.1688 12.9845 12.9845 13.1688 12.8837 13.3997L10.9164 17.9026C10.567 18.7021 9.43295 18.7021 9.08364 17.9026L7.11634 13.3997C7.01547 13.1688 6.83119 12.9845 6.60033 12.8837L2.09743 10.9164C1.2979 10.567 1.2979 9.43295 2.09743 9.08364L6.60033 7.11634C6.83119 7.01547 7.01547 6.83119 7.11634 6.60033L9.08364 2.09743Z" fill="#FFC700"/>
                                <path d="M34.0836 2.09743C34.433 1.2979 35.567 1.2979 35.9164 2.09743L37.8837 6.60033C37.9845 6.83119 38.1688 7.01547 38.3997 7.11634L42.9026 9.08364C43.7021 9.43295 43.7021 10.567 42.9026 10.9164L38.3997 12.8837C38.1688 12.9845 37.9845 13.1688 37.8837 13.3997L35.9164 17.9026C35.567 18.7021 34.433 18.7021 34.0836 17.9026L32.1163 13.3997C32.0155 13.1688 31.8312 12.9845 31.6003 12.8837L27.0974 10.9164C26.2979 10.567 26.2979 9.43295 27.0974 9.08364L31.6003 7.11634C31.8312 7.01547 32.0155 6.83119 32.1163 6.60033L34.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M59.0836 2.09743C59.433 1.2979 60.567 1.2979 60.9164 2.09743L62.8837 6.60033C62.9845 6.83119 63.1688 7.01547 63.3997 7.11634L67.9026 9.08364C68.7021 9.43295 68.7021 10.567 67.9026 10.9164L63.3997 12.8837C63.1688 12.9845 62.9845 13.1688 62.8837 13.3997L60.9164 17.9026C60.567 18.7021 59.433 18.7021 59.0836 17.9026L57.1163 13.3997C57.0155 13.1688 56.8312 12.9845 56.6003 12.8837L52.0974 10.9164C51.2979 10.567 51.2979 9.43295 52.0974 9.08364L56.6003 7.11634C56.8312 7.01547 57.0155 6.83119 57.1163 6.60033L59.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M84.0836 2.09743C84.433 1.2979 85.567 1.2979 85.9164 2.09743L87.8837 6.60033C87.9845 6.83119 88.1688 7.01547 88.3997 7.11634L92.9026 9.08364C93.7021 9.43295 93.7021 10.567 92.9026 10.9164L88.3997 12.8837C88.1688 12.9845 87.9845 13.1688 87.8837 13.3997L85.9164 17.9026C85.567 18.7021 84.433 18.7021 84.0836 17.9026L82.1163 13.3997C82.0155 13.1688 81.8312 12.9845 81.6003 12.8837L77.0974 10.9164C76.2979 10.567 76.2979 9.43295 77.0974 9.08364L81.6003 7.11634C81.8312 7.01547 82.0155 6.83119 82.1163 6.60033L84.0836 2.09743Z" fill="#FFC700"/>
                                <path d="M109.084 2.09743C109.433 1.2979 110.567 1.2979 110.916 2.09743L112.884 6.60033C112.985 6.83119 113.169 7.01547 113.4 7.11634L117.903 9.08364C118.702 9.43295 118.702 10.567 117.903 10.9164L113.4 12.8837C113.169 12.9845 112.985 13.1688 112.884 13.3997L110.916 17.9026C110.567 18.7021 109.433 18.7021 109.084 17.9026L107.116 13.3997C107.015 13.1688 106.831 12.9845 106.6 12.8837L102.097 10.9164C101.298 10.567 101.298 9.43295 102.097 9.08364L106.6 7.11634C106.831 7.01547 107.015 6.83119 107.116 6.60033L109.084 2.09743Z" fill="#FFC700"/>
                              </svg>
                        </Rate>
                        <BookName> Lady Killers: Assassin...</BookName>
                        <DownPrice>R$ 50,99</DownPrice>
                    </Options>


                </BooksOptions>                
            </Products>

      </main>
      <Line />
    </Body>
      <Footer />
    </div>
    
  );
}