import rectangle1 from "../assets/icons/Rectangle1.png";
import rectangle2 from "../assets/icons/Rectangle2.png";
import rectangle3 from "../assets/icons/Rectangle3.png";
import rectangle4 from "../assets/icons/Rectangle4.png";

const Jobs = () => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="bg-white ml-4 h-60 w-100 mr-4 rounded border-t-2">
        <lable className="font-semibold pt-4 pl-5">Add A Job</lable>
        <div className="flex justify-between mr-5 ml-5">
          <div className="h-40 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle1}
              alt="display"
            />
          </div>

          <div className="h-40 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle4}
              alt="display"
            />
          </div>
          <div className="h-40 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle3}
              alt="display"
            />
          </div>
          <div className="h-40 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle2}
              alt="display"
            />
          </div>
        </div>
        <div className="bg-white h-screen mt-5">
            
        <div className="flex pt-5 ">
        <lable className="font-semibold pt-3 ml-10">Job Title</lable>
          <input
            className="bg-gray-50 h-16 rounded shadow w-2/5 text-sm  ml-52 text-center font-thin "
            type="text"
            value="UX Designer, Python Developer, Business Developer  etc."
          />
        </div>
        <div className="flex pt-10 justify-bet " >
          <div className="font-semibold pt-5 ml-10">
            <lable  >Employee Type</lable>
            </div>
            <div className="ml-40 space-x-12">
            <input className="bg-gray-50 h-16 rounded shadow  w-52 text-center " value="Full Time Employee"/>
            <input className="bg-gray-50 h-16 rounded shadow  w-52 text-center " value="Contract Based" />
            <input className="bg-gray-50 h-16 rounded shadow  w-52 text-center " value="Internship" />
            <input className="bg-gray-50 h-16 rounded shadow  w-52 text-center " value="Freelancer" />
            </div>
        </div>
        <div className="flex pt-10 ">
            <lable className="font-semibold pt-2 ml-10" >Skills Requried</lable>
            <div className="bg-gray-50 h-40 rounded shadow w-3/5 text-xs  ml-40 text-center "></div>
            
        </div>
        <div className="pt-10 flex">
            <lable className="font-semibold ml-10 pt-5">Experience Required</lable>
            <div className="flex space-x-7 ml-28">
            <input className="bg-gray-50 h-16 rounded shadow font-thin w-44 text-center " value="Minimum" />
            <p className="pt-4">to</p>
            <input className="bg-gray-50 h-16 rounded shadow font-thin w-44 text-center " value="Maximum" />
            <p className="pt-4">years</p>
            </div>
            
        </div>
        <div className="pt-10 flex">
            <lable className="font-semibold ml-10 pt-5">Annual Salary</lable>
            <div className="flex space-x-7 ml-40 pl-1">
            <input className="bg-gray-50 h-16 rounded shadow font-thin w-44 text-center " value="Minimum" />
            <p className="pt-4">to</p>
            <input className="bg-gray-50 h-16 rounded shadow font-thin w-44 text-center " value="Maximum" />
            <p className="pt-4">per annum</p>
            </div>
            <div className="flex pt-10 ">
            <lable className="font-semibold pt-2 ml-10" >Skills Requried</lable>
            <div className="bg-gray-50 h-40 rounded shadow w-3/5 text-xs  ml-40 text-center "></div>
            
        </div>
            
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default Jobs;
