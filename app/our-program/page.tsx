export default function OurProgram() {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-oak-50 to-white py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-oak-800 text-center">
            Our Program
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Elementary Program */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-oak-800 mb-6">Elementary Program</h2>
            <hr className="border-oak-200 mb-6" />
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>K-6th grades meet Monday and Wednesday 9:00am-2:00pm. Part-time enrollment is not available.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>Students must turn 5 on or before August 31st of the current school year to be eligible to enroll in kindergarten. No exceptions will be made.</span>
              </li>
            </ul>

            {/* K-2nd Grades */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-oak-800 mb-4">Kindergarten - 2nd Grade</h3>
              <div className="bg-oak-50 rounded-lg p-6 mb-4">
                <table className="w-full text-gray-700">
                  <thead>
                    <tr className="border-b border-oak-200">
                      <th className="text-left py-2 font-semibold">Grade Level</th>
                      <th className="text-left py-2 font-semibold">Curriculum Program(s) Utilized</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-oak-100">
                      <td className="py-3">Kindergarten</td>
                      <td className="py-3">Theme Based</td>
                    </tr>
                    <tr className="border-b border-oak-100">
                      <td className="py-3">First Grade</td>
                      <td className="py-3">Five in a Row</td>
                    </tr>
                    <tr>
                      <td className="py-3">Second Grade</td>
                      <td className="py-3">Expedition Earth, Apologia Swimming Creatures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700">
                K-2nd students also participate in Music, PE, Art, and Sign Language classes, as well as a 30-minute recess.
              </p>
            </div>

            {/* 3rd-6th Grades */}
            <div>
              <h3 className="text-xl font-semibold text-oak-800 mb-4">3rd-6th Grades</h3>
              <div className="mb-4">
                <p className="font-semibold text-gray-800 mb-2">Apologia (Science):</p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>3rd Grade: Astronomy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>4th Grade: Zoology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>5th Grade: Chemistry-Physics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>6th Grade: Anatomy</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                3rd-6th grade students also participate in Art, Music, P.E, Foreign Language (Sign Language or Spanish), Reader&apos;s Theater/Communications and a 20-minute recess. Recess is also the time students pass out birthday treats and celebrate holidays like Christmas and Valentine&apos;s Day with their grade-level peers.
              </p>
            </div>
          </div>

          {/* Secondary Program */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-oak-800 mb-6">Secondary Program</h2>
            <hr className="border-oak-200 mb-6" />
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>7th-12th grades meet Monday and Wednesday.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>Full-time students will be given priority during enrollment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>Part-time students are accepted based on availability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oak-600 mt-1">•</span>
                <span>Mighty Oaks offers core classes in Science, Math, Literature, and Social Studies, as well as elective courses such as Bible, Art, Theater, and Foreign Language (ASL or Spanish).</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Science Curriculum */}
              <div className="bg-oak-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-oak-800 mb-3">Apologia (Science)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>General Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Physical Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Biology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Chemistry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Physics</span>
                  </li>
                </ul>
              </div>

              {/* Math Curriculum */}
              <div className="bg-oak-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-oak-800 mb-3">CTCMath</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Fundamentals of Math</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Pre Algebra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Algebra I</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Algebra II</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-oak-600 mt-1">•</span>
                    <span>Geometry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

