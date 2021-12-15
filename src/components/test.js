import clsx from "clsx";
<li className="text-black-70 hover:text-black hover:underline">
    <label
        onClick={() => setFilteredList(brandFilcolana)}
        className="ml-4"
    >
        {usedTagsBrand[0].name}
    </label>
</li>
<li className="text-black-70 hover:text-black hover:underline">
    <label
        onClick={() => setFilteredList(brandHjertegarn)}
        className="ml-4"
    >
        {usedTagsBrand[1].name}
    </label>
</li>
<li className="text-black-70 hover:text-black hover:underline">
    <label
        onClick={() => setFilteredList(brandPermin)}
        className="ml-4"
    >
        {usedTagsBrand[2].name}
    </label>
</li>
<li className="text-black-70 hover:text-black hover:underline">
    <label
        onClick={() => setFilteredList(brandSandnes)}
        className="ml-4"
    >
        {usedTagsBrand[3].name}
    </label>
</li>