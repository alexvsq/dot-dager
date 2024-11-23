import { useState, useEffect } from 'react'

export default function cardFollowers({ number, imgSrc }) {

  const [numberHtml, setNumberHtml] = useState(0);

  useEffect(() => {
    if (numberHtml < number) {
      const timeSum = setTimeout(() => {
        setNumberHtml(prev => prev + 1)
      }, 30)

      return () => clearTimeout(timeSum);
    } else {
      const timeRepeat = setTimeout(() => {
        setNumberHtml(0)
      }, 10000);
      return () => clearTimeout(timeRepeat);
    }
  }, [numberHtml])

  return (
    <article
      className="bg-white/80 backdrop-blur-sm rounded-2xl px-2 py-1 shadow-card md:px-4 md:py-2 flex gap-2 items-center "
    >
      <img className="h-6 md:h-8" src={imgSrc} alt={number.toString()} />

      <p id="dinamic-number" className="text-purple text-xl md:text-2xl font-semibold tabular-nums"><small>+</small>{numberHtml}k</p>
    </article>
  )
}


{/* <script>
  const numberHtml = document.querySelector("#dinamic-number");
  if (numberHtml) {
    numberHtml.innerHTML = Astro.props.number;
    console.log(Astro.props.number);
  }
</script>

<style>
  article {
    -webkit-box-shadow: 5px 5px 29px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 5px 5px 29px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 5px 5px 29px 0px rgba(0, 0, 0, 0.15);
  }
</style>
 */}