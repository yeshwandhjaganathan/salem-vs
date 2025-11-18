import StatCounter from '@/components/StatCounter';
import chefImage from '@assets/stock_images/indian_chef_cooking__8f8e3120.jpg';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[Poppins]" data-testid="text-about-title">
            About Salem VS Biryani Unavagam
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src={chefImage}
                alt="Our Chef"
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                data-testid="img-chef"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 font-[Poppins]">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
                Salem VS Biryani was started with a simple dream – to serve authentic, traditional briyani that captures the true flavors of Salem. Founded under the leadership of Mr. S. Viji Venkateshwaran (Owner/Director) and guided by a passion for excellence, our journey began in Salem with one restaurant and a vision to make briyani a memorable experience for everyone.
From humble beginnings, Salem VS Biryani has grown into a trusted name in the food industry. With the dedication of our team and the support of our loyal customers, we expanded into multiple outlets across Salem and surrounding areas. Each new branch carries the same promise – authentic taste, consistent quality, and warm hospitality.
              </p>
              {/* <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
                Our secret lies in using the finest ingredients, time-honored recipes passed down through generations,
                and the passion of our expert chefs who treat every dish as a masterpiece.
              </p>
              <p className="text-lg text-muted-foreground font-[Roboto]">
                We believe that great food brings people together, and every plate we serve is prepared with love and
                respect for our culinary heritage.
              </p> */}
            </div>
          </div>

          <div className="bg-card rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCounter end={20} label="Years of Tradition" suffix="+" />
              <StatCounter end={50000} label="Happy Customers" suffix="+" />
              <StatCounter end={15} label="Branches Across Tamil Nadu" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
