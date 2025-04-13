import { OrganizerGridIndex } from "../components/OrganizerGrid";

export const metadata = {
  title: "SCI-HAI Workshop",
  description: "The First Workshop on AI Assisting Scientific Research",
};

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">SCI-HAI</span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    Workshop
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  The First Workshop on AI Assisting Scientific Research -
                  exploring the intersection of artificial intelligence and
                  scientific discovery.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/docs"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Workshop Details
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/docs/call-for-papers"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Call for Papers
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-indigo-900 sm:h-72 md:h-96 lg:h-full lg:w-full">
            <div className="flex h-full items-center justify-center">
              <div className="p-8 text-center text-white">
                <div className="text-5xl font-bold mb-4">2025</div>
                <div className="text-2xl mb-6">
                  Science & Human-AI Interaction
                </div>
                <div className="text-xl opacity-80">Date: To be announced</div>
                <div className="text-xl opacity-80">
                  Location: To be announced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About the Workshop
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Assisting Scientific Research
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Welcome to the First Workshop on AI Assisting Scientific Research
              (SCI-HAI), a forum for researchers, practitioners, and
              stakeholders working at the intersection of artificial
              intelligence and scientific discovery.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg text-gray-500 mb-6">
              Significant advancements in Large Language Models (LLMs) have
              spurred interest in using these frontier AI models to assist
              researchers in various scientific tasks, such as:
            </p>
            <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Idea Generation & Brainstorming
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Accelerating the research ideation process through AI-assisted
                  brainstorming and concept exploration.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Literature Review & Synthesis
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Searching, synthesizing literature reviews and enabling
                  literature-based question-answering.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Data Analysis & Discovery
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Using AI for data-driven discovery and complex scientific data
                  analysis.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Research Pipeline Automation
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  End-to-end research pipeline including experiment execution,
                  ML engineering, and paper generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Organizing Committee
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Workshop Organizers
            </p>
          </div>

          <OrganizerGridIndex />
        </div>
      </div>

      {/* Focus Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Focus
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bringing Communities Together
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-gray-500">
            <p>
              The focus of our workshop is on developing LLMs and AI systems
              that can accelerate scientific research in various scientific
              domains and assist human researchers. We aim to bring together
              researchers from different communities, including ML, NLP,
              Human-Computer Interaction, and various scientific disciplines
              such as biology and chemistry, to work together on the design,
              development, and evaluation of various forms of scientific LLMs
              and systems.
            </p>
            <p>
              Many of these AI systems are shown to be helpful tools for human
              researchers to accelerate the scientific discovery process. For
              example, systems like Scideator provide assistance such as key
              facet extraction from papers and automated novelty assessment with
              explanations to facilitate ideation. Beyond these simple
              collaboration modes, there is still a huge under-explored space
              for building helpful AI tools for accelerating scientific research
              and fostering more effective human-AI collaboration in science.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to contribute?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Submit your research to be part of this exciting workshop exploring
            the future of science and human-AI interaction.
          </p>
          <a
            href="/docs/call-for-papers"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Submit Your Paper
          </a>
        </div>
      </div>

      {/* Schedule Highlights */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-12">
            Schedule Highlights
          </h2>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mb-10">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    09:00 - 10:50
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    Keynote Speeches (3 speakers)
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    11:05 - 12:00
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    Oral Presentations
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    13:00 - 14:45
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    Keynote Speeches (3 speakers) & Panel Discussion
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    15:30 - 17:00
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    Poster Session / Shared Task
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500">
            <em>
              Note: This schedule is tentative and subject to change. See the
              full schedule for details.
            </em>
          </p>
          <div className="text-center mt-8">
            <a
              href="/docs/schedule"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View Complete Schedule →
            </a>
          </div>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Important Dates
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  Submission Deadline
                </h3>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  TBA
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  Notification
                </h3>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  TBA
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  Camera-Ready
                </h3>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  TBA
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Workshop</h3>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  TBA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
