import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
      // style={{ direction: 'ltr' }}
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 right-0 w-full sm:-top-5 sm:right-3/4 sm:mr-8 sm:w-auto md:right-2/3 lg:right-auto lg:left-2 lg:mr-0 xl:right-2/3 xl:left-auto" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
            اشترك الآن واحصل على خصم 69% خاص للمستخدمين الجدد!
            </h2>
            {/* <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and I’ll send you a sample from the book
              containing two of my favorite chapters.
            </p> */}
          </div>
          <form className="lg:pl-16">
            {/* <h3 className="text-base font-medium tracking-tight text-white">
            احصل على NordVPN الآن
            </h3> */}
            {/* Get NordVPN Now button */}
            <Button
              href="https://go.getnord.net/aff_c?offer_id=226&aff_id=104253"
              color="white"
              onClick={() => {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-16543431410/AljUCKexj6oZEPL1wtA9',
                    'value': 1.0,
                    'currency': 'MAD',
                    'event_callback': callback
                });
                return false;
              }}
              className="mt-4">احصل الآن على خصم 69%</Button>
          </form>
        </Container>
      </div>
    </section>
  )
}
