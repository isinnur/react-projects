import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // parseInt() fonksiyonu bu değeri tam sayıya dönüştürür ve "amount" değişkenine atar.Bu, genellikle kullanıcının girdiği bir form verisini işlemek gibi sayısal işlemler yapmanın gerektiği
    // durumlarda kullanılır.
    let amount = parseInt(count);

    //     Bu kod satırı, "data" adlı bir değişkenin ilk "amount" adet karakterini içeren bir metin dizisi(string) parçasını, belirtilen bir başka HTML elementinde görüntülemek için kullanılır.
    // "data.slice(0, amount)" ifadesi, "data" değişkeninin başından itibaren ilk "amount" adet karakterini alır ve bir alt dize oluşturur.Daha sonra, "setText" adlı bir fonksiyon kullanarak, oluşturulan alt diziyi, belirtilen HTML elementinin içeriği olarak ayarlar ve görüntüler.
    if (count <= 0) {
      amount = 1;
    }

    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3> tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button type='submit' className='btn'>generate</button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
