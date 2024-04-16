import assets1 from "./assets/1apple-watch.png";
import assets2 from "./assets/2beats-headphones.png";
import assets3 from "./assets/homepod.png";
import assets4 from "./assets/ipad-pro.png";
import assets5 from "./assets/iphone-x.png";
import assets6 from "./assets/jbl-speaker.png";
import assets7 from "./assets/jlab-audio-wireless.png";
import assets8 from "./assets/macbook-pro.png";
import assets9 from "./assets/Cart_Button.png";
import assets10 from "./assets/shopping-bag.png";
import styles from "./index.css";

export function App() {
  return (
    <div class="root">
      <div class="footer">

        <div class="font">
        <h2>MKS</h2>
        <p>
          Sistemas
        </p>
          <div class="selecionar">
            <a>
              <img src={assets9} alt />
            </a>
          </div>
        </div>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <ul>
            <div class="containe1">
              <div class="topicos">
                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets1} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="figura1">
                            {" "}
                            Apple Watch <br /> Series 4 GPS{" "}
                          </h2>{" "}
                          <p class="figura"> R$399 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets8} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="figura1">
                            {" "}
                            Apple <br /> MacBook Pro{" "}
                          </h2>{" "}
                          <p class="figura"> R$2.499 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets6} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class=""> JBL Speaker </h2>{" "}
                          <p class="figura"> R$199 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets4} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="">
                            {" "}
                            Apple iPad Pro <br /> 64 GB
                          </h2>{" "}
                          <p class="figura"> R$899 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets5} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="">
                            {" "}
                            Apple iPhone <br /> 128 GB{" "}
                          </h2>{" "}
                          <p class="figura"> R$899 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets3} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="">
                            {" "}
                            Apple <br /> Homepod{" "}
                          </h2>{" "}
                          <p class="figura"> R$399 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets2} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="">
                            {" "}
                            Beats <br /> Headphones{" "}
                          </h2>{" "}
                          <p class="figura"> R$459 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>

                <div class="divindividual">
                  <div class="wrapper">
                    <article class="card">
                      <img src={assets7} alt />
                      <div class="card__content">
                        <div class="grid">
                          <h2 class="">
                            {" "}
                            JBudsAir <br /> Wireless{" "}
                          </h2>{" "}
                          <p class="figura"> R$249 </p>{" "}
                        </div>{" "}
                        <p class="codigo">
                          {" "}
                          Redesigned from stratch and completely revised{" "}
                        </p>{" "}
                        <div class="partebaixo">
                          <img class="partebaixo1" src={assets10} alt="" />{" "}
                          <a href="#"> COMPRAR </a>
                        </div>{" "}
                      </div>{" "}
                    </article>{" "}
                  </div>
                </div>
              </div>
              <div class="rodape">
                <p>MKS sistemas Todos os direitos reservados</p>
              </div>
            </div>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
