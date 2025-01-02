const Footer = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className={`${`${isDark ? 'bg-gradient-to-br from-[#121212] via-[#121212] to-[#000000]' : 'bg-blue-500'}`}`}>
        <div className="text-white h-[60px] flex items-center justify-center border-t-[#fff]">
            <h2>Copyright by ©Bekzod</h2>
        </div>
    </div>
  )
}

export default Footer