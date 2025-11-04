export default function ClassInformation() {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-oak-50 to-white py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-oak-800 text-center">
            Class Information
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Elementary - K-2nd Grade */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-oak-800 mb-2">
              <a
                href="https://www.mightyoaks.org/wp-content/uploads/2025/08/K-2_Schedule_2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oak-600 transition-colors duration-200"
              >
                K-2nd Grade Schedule 2025/2026
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">View the complete schedule for kindergarten through 2nd grade students</p>
            <a
              href="https://www.mightyoaks.org/wp-content/uploads/2025/08/K-2_Schedule_2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Schedule
            </a>
          </div>

          {/* Elementary - 3rd-6th Grade */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-oak-800 mb-2">
              <a
                href="https://www.mightyoaks.org/wp-content/uploads/2025/07/3-6_schedule_2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oak-600 transition-colors duration-200"
              >
                3rd-6th Grade Schedule 2025/2026
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">View the complete schedule for 3rd through 6th grade students</p>
            <a
              href="https://www.mightyoaks.org/wp-content/uploads/2025/07/3-6_schedule_2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Schedule
            </a>
          </div>

          {/* Elementary Supply Lists */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-oak-800 mb-2">
              <a
                href="https://www.mightyoaks.org/wp-content/uploads/2025/07/Elementary_Supply_List_2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oak-600 transition-colors duration-200"
              >
                K-6th Grade Supply Lists 2025/2026
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">Complete list of supplies needed for elementary students</p>
            <a
              href="https://www.mightyoaks.org/wp-content/uploads/2025/07/Elementary_Supply_List_2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Supply List
            </a>
          </div>

          {/* Middle/High School Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-oak-800 mb-2">
              <a
                href="https://www.mightyoaks.org/wp-content/uploads/2025/03/MS-HS_Schedule_2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oak-600 transition-colors duration-200"
              >
                Middle/High School Schedule 2025/2026
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">View the complete schedule for 7th-12th grade students</p>
            <a
              href="https://www.mightyoaks.org/wp-content/uploads/2025/03/MS-HS_Schedule_2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Schedule
            </a>
          </div>

          {/* Middle/High School Class Descriptions */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-oak-800 mb-2">
              <a
                href="https://www.mightyoaks.org/wp-content/uploads/2025/07/MS-HS_Course_Descriptions_2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oak-600 transition-colors duration-200"
              >
                Middle/High School Class Descriptions 2025/2026
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">Detailed descriptions of all middle and high school courses</p>
            <a
              href="https://www.mightyoaks.org/wp-content/uploads/2025/07/MS-HS_Course_Descriptions_2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Class Descriptions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

