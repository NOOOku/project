import React from 'react';
import { Courses } from '../components/Courses';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { Footer } from '../components/Footer';

export const Main = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://6449761bb88a78a8f00886f1.mockapi.io/courses')
      .then((res) => setCourses(res.data));
  }, []);


  return (
    <section>
      <div className="container">
        <div className="heading-wrapper">
          <div>
            <h1>Программистом может стать каждый</h1>
            <p>
              Наша школа программирования поможет вам овладеть навыками <br /> программирования
              ускорено и качественно
            </p>
          </div>
          
          <Link className="link" to="/contacts">
            <span className="btn">Оставить Заявку</span>
          </Link>
        </div>
        <div className="wrapper-block">
          <Courses courses={courses} />
        </div>
       <div className="video">
         
         <div className="text-video1"><h1> Что будет на курсе</h1></div>
            <div className="block-video">
               <iframe controls loop muted autoplay width="640" autoPlay={"autoplay"} preLoad="auto"height="360" src="https://code.s3.yandex.net/landings-v2-html-css/demo/CSS-HTML.webm" frameborder="0" allowfullscreen ></iframe>
             <div className="text-video2">
                    <div className="text-video"><h2> Наглядная теория и пространство для экспериментов </h2></div>
                <div className="text-video3"><span>С первого дня начнёте практиковаться и писать код в интерактивном учебнике — там сразу видно
                 результат и легко исправлять ошибки. А ещё сможете изучать вёрстку по видео, где разбираются
                 работы студентов — в любое время и удобном темпе.
                 </span></div>
              </div>
            </div>
       </div>
      
       <div className="photo-kachok"> 
       <div className="text-kachok"> 
       <div className="text-kachok1"><h2> 250+ задач для оттачивания навыков</h2> </div>
       <div className="text-kachok2"><p>Задания в тренажёре всегда доступны и проверяются автоматически</p></div>
       </div>
       <div className="kachok"><img src="https://code.s3.yandex.net/landings-v2-html-css/demo/Image2.jpg" height={400} width={700} alt="kachok"/></div>
       </div>

       <div className="photo-vebinar"> 
       <div className="vebinar"><img src="https://code.s3.yandex.net/landings-v2-html-css/demo/Image3.jpg" height={400} width={700} alt="vebinar"/></div>
       <div className="text-vebinar"> 
       <div className="text-vebinar1"><h2> Вебинары с наставниками</h2> </div>
       <div className="text-vebinar2"><p>Опытные разработчики ответят на вопросы и поддержат, если что-то не получится с первого раза</p></div>
       </div>
       </div>

       <div className="kolage"> 
       <h1>Вы будете не одни: наши эксперты поддержат на всех этапах обучения</h1>
       <div className="photo-kolage1">
          <div className='nastavnyk'>
                <div className="photo-nastavnyk"><img src="https://code.s3.yandex.net/landings-v2-html-css/galleries/support1.jpg" height={200} width={330} alt="nastavnyk"/></div>    
                <div className="text-nastavnyk"> <h3>Наставники научат находить ответы</h3>
                  <p className='pp'> Пояснят теорию и помогут найти решение, <br /> если столкнётесь с трудной задачей</p></div>
          </div>
          <div className='revyu'>
                <div className="photo-revyu"><img src="https://code.s3.yandex.net/landings-v2-html-css/galleries/support2.jpg" height={200} width={330} alt="revyu"/></div>    
                <div className="text-revyu"> <h3>Ревьюеры проверят код и проекты</h3>
                  <p className='pp'>Укажут на ошибки и дадут <br />развивающую обратную связь</p></div>
          </div>
          </div>
          <div className="photo-kolage1">
          <div className='kurator'>
                <div className="photo-kurator"><img src="https://code.s3.yandex.net/landings-v2-html-css/galleries/support3.jpg" height={200} width={330} alt="kurator"/></div>    
                <div className="text-kurator"> <h3>Кураторы сделают обучение <br /> комфортным</h3>
                  <p className='pp'>Напомнят о сроках по проектам, <br />пришлют записи воркшопов, <br />выслушают и поддержат</p></div>
          </div>
          <div className='specialyst'>
                <div className="photo-specialyst"><img src="https://code.s3.yandex.net/landings-v2-html-css/galleries/support4.jpg" height={200} width={330} alt="specialyst"/></div>    
                <div className="text-specialyst"> <h3>Специалисты поддержки устранят<br /> неполадки</h3>
                  <p className='pp'>Им можно писать 24/7: например, <br />если не открывается учебник</p></div>
          </div>
       </div>
       </div>

       
      </div>
    </section>
  );
};
