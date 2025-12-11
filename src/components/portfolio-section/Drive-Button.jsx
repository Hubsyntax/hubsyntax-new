export default function DriveButton({ text = "Web Development" }) {
    return (
        <div className="inline-block text-[18px] font-medium text-white bg-[#FF3E5E] 
              rounded-[5px] px-[40px] py-[18px] mt-[50px] mb-[50px] cursor-pointer tab-btn">
            {text}
        </div>
    );
}
