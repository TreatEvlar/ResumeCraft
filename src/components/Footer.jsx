export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content - Modified grid structure */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Social Connect - Full width on small screens, 1 column on medium+ */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform) => (
              <a key={platform} href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">{platform}</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{platform.charAt(0).toUpperCase()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Job Seekers</h3>
          <ul className="space-y-2">
            {['Build a Resume', 'Resume Samples', 'Professional Templates', 'Cover Letter Builder', 'Job Search Tips'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Career Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Career Resources</h3>
          <ul className="space-y-2">
            {['Resume Guide', 'Interview Prep', 'Career Advice', 'Cover Letter Help', 'Career Blog'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Company - Now separate column */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2">
            {['About Us', 'Product Updates', 'Plans & Pricing', 'Partnerships', 'Press Kit'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support - Now separate column */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {['Help Center', 'Contact Support', 'Terms of Use', 'Privacy Policy', 'Your Choices'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section - Unchanged */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 bg-gray-800 rounded text-xs">CERTIFIED PRO</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-xs">TOP RATED</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              More than a resume builder. ResumePro is part of the <span className="font-medium">CareerSuccess</span> platform.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-gray-500">
              <span>International | Copyright © {new Date().getFullYear()} ResumePro</span>
              <p className="mt-2">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}