import { categorySelector } from '@/features/categories/categoriesSlice'
import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from './ui/button';
import { DialogBox } from './dialogBox';

const WidgetCard = () => {
  const dashboardData = useSelector(categorySelector);

  return (
    <div className="space-y-6">
      {dashboardData.categories.map((category) => (
        <div key={category.id} className="space-y-4">
          {/* Category Title */}
          <div className="text-base font-semibold ml-2 ">
            {category.name}
          </div>

          {/* Widgets Grid */}
          <div className="bg-slate-400/10 rounded-xl p-4 min-h-[220px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.widgets.map((wid) => (
              <div
                key={wid.id}
                className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 p-3 flex flex-col justify-between min-h-[200px]"
              >
                <div className="font-semibold text-sm">{wid.name}</div>
                <div className="text-xs text-slate-600 flex-1 flex items-center justify-center">
                  {wid.text ? (
                    wid.text
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-slate-400"
                    >
                      <path d="M12 16v5m4-7v7m4-11v11m2-18-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15m2 3v3m4-7v7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}

            {/* Add Widget Card */}
            <div className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 p-3 flex items-center justify-center min-h-[180px]">
              <DialogBox id={category.id}>
                <Button className="bg-white text-slate-500 text-xs h-7 rounded-md px-2 hover:bg-slate-50 border border-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Widget
                </Button>
              </DialogBox>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WidgetCard
