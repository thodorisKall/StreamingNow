import Plan from "./Plan"

function PlansCard() {
  return (
    <>
      <div className='plans__title font-semibold flex flex-col items-center justify-center lg:mb-8'>
        <h5 className='text-lg text-c-blue'>OUR PRICING</h5>
        <h2 className='text-4xl'>
          Choose Your Subscription <span className='text-c-blue'>Plan</span>
        </h2>
      </div>
      <section className='flex justify-center gap-6'>
        <Plan price={25} duration={"7"} type={"Days"} quality={"720p"} />
        <Plan price={35} duration={"1"} type={"Month"} quality={"1080p"} />
        <Plan price={79} duration={"12"} type={"Months"} quality={"4K"} />
        <Plan price={189} duration={""} type={"Lifetime"} quality={"Ultra"} />
      </section>
    </>
  )
}

export default PlansCard
