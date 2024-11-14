import { Button } from '../ui/button'
import AOS from '../layout/AOS'

const PublishingPapers = () => {
  return (
    <AOS>
    <section id="publish" className="w-full py-12 md:py-24  bg-[#fafafa]">
          <div className="container md:w-11/12 mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">Publishing Papers</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-6">
              Share your research with the energy experts, students and researchers across Africa. Submit your papers for a chance to present at the yearly Africa International Conference on Energy and Environmental Studies (AICCEES)
            </p>
            <div className="flex justify-center">
              <Button className="bg-red-600 text-white hover:bg-red-700">Submit Your Paper</Button>
            </div>
          </div>
        </section>
    </AOS>
  )
}

export default PublishingPapers