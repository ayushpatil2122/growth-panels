export default function Table() {
    return <>
        <div className="px-8 py-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Submission</th>
                <th className="pb-4 font-medium">Reward</th>
                <th className="pb-4 font-medium">
                  <div className="flex items-center gap-1">
                    Date
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  No results found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
}