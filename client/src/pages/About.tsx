import StatCounter from '@/components/StatCounter';
import chefImage from '@assets/stock_images/indian_chef_cooking__8f8e3120.jpg';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[Poppins]" data-testid="text-about-title">
            About Salem VS Biryani
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
  src={chefImage}
  alt="Our Chef"
  className="
    w-full
    aspect-[4/5]
    lg:aspect-auto
    lg:h-[600px]
    object-contain
    lg:object-cover
    rounded-xl
    shadow-xl
  "
/>

            </div>

           <div className="order-1 lg:order-2">
  <h2 className="text-3xl font-bold mb-6 font-[Poppins]">Our Story</h2>

  <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
    The journey began in 2010 during my college years, a time of financial struggle and survival.
    Working part-time at my uncle’s Salem RR Biriyani shop shaped my discipline, work ethic, and
    respect for quality food.
  </p>

  <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
    In 2013, I became a business partner and helped expand into large-scale catering, serving major
    corporate clients. Catering remained a strong foundation of growth for several years.
  </p>

  <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
    By 2018, I started independently with catering services at Pothys and Reliance Mall. In 2019,
    my first own outlet opened near Kavery Hospital, followed by rapid expansion across Salem.
  </p>

  <p className="text-lg text-muted-foreground font-[Roboto]">
    With five successful locations today, a major preparation facility, and a renewed vision, a new
    chapter began in 2026 as <strong>“Salem VS Briyani”</strong>—built on perseverance, belief, and
    uncompromising quality.
  </p>
</div>

          </div>

          <div className="bg-card rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCounter end={7} label="Years of Tradition" suffix="+" />
              <StatCounter end={50000} label="Happy Customers" suffix="+" />
              <StatCounter end={5} label="Branches In Salem" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
