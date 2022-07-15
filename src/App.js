import adult from './images/adult.svg';
import child from './images/child.svg'
import plus from './images/plus-optimized.svg'
import run from './images/run.svg'
import spinal from './images/spinal.svg'
import arms from './images/arms.svg'
import swallow from './images/swallow.svg'
import lungs from './images/lungs.svg'
import joint from './images/joint.svg'
import hips from './images/hips.svg'
import fatigue from './images/fatigue.svg'
import woman from './images/woman.svg'
import './App.css';
import { useState } from 'react';

function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);


  return (
    <div className='test'>
      <header>
        <h1 className='test__header'>А вдруг СМА?</h1>
      </header>
      <section>
        <h2 className='test__subtitle'>Выберите, кто Ваш пациент:</h2>
        <div className='test__patient-wrapper' >
          <div className='test__patient'>
            <h3 className='test__patient-title'>Взрослый</h3>
            <img className='test__patient-image' src={adult} alt='изображение взрослой женщины' />
            <ul className='test__patient-symptoms'>
              <li className='test__patient-symptom'>
                Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.
              </li>
              <li className='test__patient-symptom'>
                По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
              </li>
              <li className='test__patient-symptom'>
                По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</li>
            </ul>
          </div>
          <div className='test__patient'>
            <h3 className='test__patient-title'>Ребенок</h3>
            <img className='test__patient-image' src={child} alt='изображение спящего грудного ребенка' />
            <ul className='test__patient-symptoms'>
              <li className='test__patient-symptom'>
                Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                в отношении наличия СМА.
              </li>
              <li className='test__patient-symptom'>
                Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
                терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                дегенерации при прогрессировании заболевания
              </li>
            </ul>
          </div>
        </div>

        <p className='test__hint'>
          Сообщает ли один из ваших пациентов о следующих симптомах?<span className='test__extra-info'>(наведите на любую иконку и узнайте больше)</span>
        </p>
        <div className='test__images-description'>

          <div className='test__images-circle'>
            <div className='test__image-circle-group test__image-circle-group_one' onMouseEnter={() => setOne(true)} onMouseLeave={() => setOne(false)} >
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={spinal} className='test__image' alt='позвоночник'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_two' onMouseEnter={() => setThree(true)} onMouseLeave={() => setThree(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={run} className='test__image' alt='ноги'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_three' onMouseEnter={() => setTwo(true)} onMouseLeave={() => setTwo(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={arms} className='test__image' alt='руки'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_four' onMouseEnter={() => setFour(true)} onMouseLeave={() => setFour(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={swallow} className='test__image' alt='глотать'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_five' onMouseEnter={() => setFive(true)} onMouseLeave={() => setFive(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={lungs} className='test__image' alt='легкие'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_six' onMouseEnter={() => setSix(true)} onMouseLeave={() => setSix(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={joint} className='test__image' alt='суставы'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_seven' onMouseEnter={() => setSeven(true)} onMouseLeave={() => setSeven(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={hips} className='test__image' alt='бедра'></img>
            </div>
            <div className='test__image-circle-group test__image-circle-group_eight' onMouseEnter={() => setEight(true)} onMouseLeave={() => setEight(false)}>
              <img className='test__image-plus' src={plus} alt='картинка плюс'></img>
              <img src={fatigue} className='test__image' alt='усталость'></img>
            </div>
            <div className='test__patient-image_opacity'>
              <img className='test__patient-image' src={woman} alt='изображение взрослой женщины' />
            </div>
            <p className={`test__image-description_one ${one ? `test__image-description_visible` : ``}`}>Сколиоз</p>
            <p className={`test__image-description_two ${two ? `test__image-description_visible` : ``}`}>Ограниченная способность поднимать руки
              и переносить предметы</p>
            <p className={`test__image-description_three ${four ? `test__image-description_visible` : ``}`}>Нарушения жевания и глотания </p>
            <p className={`test__image-description_four ${five ? `test__image-description_visible` : ``}`}>Дыхательная недостаточность/ респираторная дисфункция</p>
            <p className={`test__image-description_five ${three ? `test__image-description_visible` : ``}`}>Неспособность бегать, изменение походки</p>
            <p className={`test__image-description_six ${six ? `test__image-description_visible` : ``}`}>Контрактура суставов</p>
            <p className={`test__image-description_seven ${seven ? `test__image-description_visible` : ``}`}>Вывих бедра</p>
            <p className={`test__image-description_eight ${eight ? `test__image-description_visible` : ``}`}>Утомляемость</p>
          </div>


        </div>

        <img className='test__center-image'></img>
      </section>

    </div>
  );
}

export default App;
