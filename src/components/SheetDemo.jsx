import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { categorySelector, removeWidget } from "@/features/categories/categoriesSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function SheetDemo(props) {
  const [activeTab, setActiveTab] = useState("cspm");
  const sections = ["cspm", "cwpp", "registry"]
  const [confirmList, setConfirmList] = useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("dispatch:", confirmList)
    dispatch(removeWidget(confirmList))
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        {props.children}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="bg-[#2d0f85] w-full h-[28px] text-xs flex items-center pl-2 font-medium text-white">
            ADD WIDGET
          </div>
          <SheetTitle>
          </SheetTitle>
          <div className="">
            <SheetDescription className="px-3 py-2 text-sm text-gray-600 leading-relaxed">
              Personalize your dashboard by adding the following widgets
            </SheetDescription>

            <div className="pl-2 pt-9">
              <div className="w-[220px] flex flex-row gap-6 pt-3 pl-2  border-b-2 border-gray-300 font-semibold text-xs">
                <button
                  className={`-mb-[2px] pb-2 ${activeTab === "cspm"
                    ? "border-b-2 border-blue-800 text-blue-900"
                    : "border-b-2 border-transparent"
                    }`}
                  onClick={() => setActiveTab("cspm")}
                >
                  CSPM
                </button>
                <button
                  className={`-mb-[2px]  pb-2 ${activeTab === "cwpp"
                    ? "border-b-2 border-blue-800 text-blue-800"
                    : "border-b-2 border-transparent"
                    }`}
                  onClick={() => setActiveTab("cwpp")}
                >
                  CWPP
                </button>
                <button
                  className={`-mb-[2px]  pb-2 ${activeTab === "registry"
                    ? "border-b-2 border-blue-800 text-blue-800"
                    : "border-b-2 border-transparent"
                    }`}
                  onClick={() => setActiveTab("registry")}
                >
                  REGISTRY
                </button>
              </div>
            </div>
          </div>
        </SheetHeader>
        <div className="">
          {activeTab === "cspm" && <div><WidgetList id={"cspm"} setConfirmList={setConfirmList} confirmList={confirmList} /></div>}
          {activeTab === "cwpp" && <div><WidgetList id={"cwpp"} setConfirmList={setConfirmList} confirmList={confirmList} /></div>}
          {activeTab === "registry" && <div><WidgetList id={"registry"} setConfirmList={setConfirmList} confirmList={confirmList} /></div>}
        </div>

        <SheetFooter className="flex flex-row ml-auto ">

          <SheetClose asChild>
            <Button variant="outline" className="h-[28px] rounded-sm text-xs ">Close</Button>
          </SheetClose>
          <Button type="submit" className="h-[28px] rounded-sm text-xs bg-blue-900 hover:bg-blue-950 " onClick={handleClick} >Confirm</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function WidgetList(props) {
  const category = useSelector(categorySelector)
  const widgets = category.categories.find(section => section.id == props.id).widgets
  console.log("Filtered Widgets", widgets)


  const handleChange = (e) => {
    const idPart = e.target.id.split("")[1];  // checkbox-cspm-1
    if (!e.target.checked) {
      // Add to confirmList
      props.setConfirmList([...props.confirmList, idPart]);
    }
    else {
      // Remove from confirmList
      props.setConfirmList(props.confirmList.filter((id) => id !== idPart))
    }
  }
  console.log("List:", props.confirmList)

  return <div>
    {widgets.map((wid) => {
      return <div key={wid.id} className="
      rounded-[3px]  outline outline-slate-500 font-light text-slate-400 text-xs
      max-w-[400px]  h-[25px] flex items-center space-x-2
      m-2">
        <input
          type="checkbox"
          id={`checkbox_${wid.id}`}
          className="w-4 h-3 accent-blue-800 border-gray-300 ml-2"
          checked={!props.confirmList.includes(String(wid.id))}
          onChange={handleChange}
        />
        <label htmlFor={`checkbox-${wid.id}`} className="text-gray-700">
          {wid.name}
        </label>
      </div>
    })}
  </div>
}