import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Caique</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <header id="main-header">
        <div className="content">
          <nav>
            <ul>
              <li>
                <img src="/images/home.svg" alt="Home" />
                Home
              </li>
              <li>
                <img src="/images/notification.svg" alt="Notificações" />
                Notificações
              </li>
              <li>
                <img src="/images/message.svg" alt="Mensagens" />
                Mensagens
              </li>
            </ul>
          </nav>
          <img src="/images/logo.svg" alt="Logo Twitter" />
          <div className="side">
            <input type="text" placeholder="Buscar no Twitter" />
            <img src="/images/avatar.png" alt="Avatar" />
            <button>Tweetar</button>
          </div>
        </div>
      </header>

      <div className="banner">
        <img src="/images/logo-white.svg" alt="Twitter Logo" />
      </div>

      <div className="bar">
        <div className="content">
          <ul>
            <li className="active">
              <span>Tweets</span>
              <strong>3</strong>
            </li>
            <li>
              <span>Seguindo</span>
              <strong>453</strong>
            </li>
            <li>
              <span>Seguidores</span>
              <strong>63215</strong>
            </li>
            <li>
              <span>Favoritos</span>
              <strong>23</strong>
            </li>
          </ul>

          <div className="actions">
            <button>Seguir</button>

            <img src="/images/more.svg" alt="Mais ações" />
          </div>
        </div>
      </div>

      <div className="wrapper-content content">
        <aside className="profile">
          <img
            className="avatar"
            src="/images/avatar.png"
            alt="Caique Ribeiro"
          />
          <h1>Caique Ribeiro</h1>
          <span>Engenheiro de Software</span>
          <p>
            Oi, eu sou Caique Ribeiro, sou um desenvolvedor FullStack do Brasil.
          </p>

          <ul className="user-info">
            <li>
              <img src="/images/place.svg" alt="Local" /> Contagem, Minas Gerais
              - Brasil
            </li>
            <li>
              <img src="/images/url.svg" alt="Website" />{" "}
              <a href="https://github.com/CaiqueR">github.com/CaiqueR</a>
            </li>
            <li>
              <img src="/images/joined.svg" alt="Cadastrado" /> Entrou em
              Setembro de 2020
            </li>
            <li>
              <img src="/images/born.svg" alt="Nascido" /> 03/12/1997
            </li>
          </ul>

          <div className="widget followers">
            <strong>
              <img src="/images/followers.svg" alt="Seguidores" /> Seguidores
              que você conhece
            </strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="widget images">
            <strong>
              <img src="/images/images.svg" alt="Imagens" /> Fotos e vídeos
            </strong>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </aside>

        <section className="timeline">
          <nav>
            <a href="" className="active">
              Tweets
            </a>
            <a href="">Tweets e respostas</a>
            <a href="">Mídias</a>
          </nav>

          <ul className="tweets">
            <li>
              <img className="avatar" src="/images/avatar.png" alt="Avatar" />
              <div className="info">
                <strong>
                  Caique Ribeiro <span>@CaiqueRibeiro</span>
                </strong>
                <p>Refazendo a interface do Twitter 😝</p>

                <div className="actions">
                  <a href="">
                    <img src="/images/comments.svg" alt="Comentarios" /> 3
                  </a>
                  <a href="">
                    <img src="/images/retweet.svg" alt="Retweets" /> 4
                  </a>
                  <a href="">
                    <img src="/images/like.svg" alt="Like" /> 7
                  </a>
                </div>
              </div>
            </li>

            <li>
              <img className="avatar" src="/images/avatar.png" alt="Avatar" />
              <div className="info">
                <strong>
                  Caique Ribeiro <span>@CaiqueRibeiro</span>
                </strong>
                <p>Fazendo um pequeno teste 🤣</p>

                <div className="actions">
                  <a href="">
                    <img src="/images/comments.svg" alt="Comentarios" /> 3
                  </a>
                  <a href="">
                    <img src="/images/retweet.svg" alt="Retweets" /> 4
                  </a>
                  <a href="">
                    <img src="/images/like.svg" alt="Like" /> 7
                  </a>
                </div>
              </div>
            </li>

            <li>
              <img className="avatar" src="/images/avatar.png" alt="Avatar" />
              <div className="info">
                <strong>
                  Caique Ribeiro <span>@CaiqueRibeiro</span>
                </strong>
                <p>Esse é o resultado final da clone do Twitter 😍</p>

                <div className="actions">
                  <a href="">
                    <img src="/images/comments.svg" alt="Comentarios" /> 3
                  </a>
                  <a href="">
                    <img src="/images/retweet.svg" alt="Retweets" /> 4
                  </a>
                  <a href="">
                    <img src="/images/like.svg" alt="Like" /> 7
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <aside className="widgets">
          <div className="widget follow">
            <div className="title">
              <strong>Quem seguir</strong>
              <a href="">Atualizar</a>
              <a href="">Ver todos</a>
            </div>

            <ul>
              <li>
                <div className="profile">
                  <img src="/images/avatar.png" alt="Avatar" />
                  <div className="info">
                    <strong>
                      Caique <span>@caique</span>
                    </strong>
                    <button>Seguir</button>
                  </div>
                </div>
                <a href="">&times;</a>
              </li>
              <li>
                <div className="profile">
                  <img src="/images/avatar.png" alt="Avatar" />
                  <div className="info">
                    <strong>
                      Caique <span>@caique</span>
                    </strong>
                    <button>Seguir</button>
                  </div>
                </div>
                <a href="">&times;</a>
              </li>
              <li>
                <div className="profile">
                  <img src="/images/avatar.png" alt="Avatar" />
                  <div className="info">
                    <strong>
                      Caique <span>@caique</span>
                    </strong>
                    <button>Seguir</button>
                  </div>
                </div>
                <a href="">&times;</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <footer>
        <nav>
          <a href="">
            <img src="/images/home.svg" alt="" />
          </a>
          <a href="">
            <img src="/images/search.svg" alt="" />
          </a>
          <a href="">
            <img src="/images/notification.svg" alt="" />
          </a>
          <a href="">
            <img src="/images/message.svg" alt="" />
          </a>
        </nav>
      </footer>
    </>
  );
}
