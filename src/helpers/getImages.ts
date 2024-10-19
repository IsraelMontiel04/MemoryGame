type Props={
    size:number
}

export const getImages = ({size}:Props)=>{
    const images = [
        "/bun.svg",
        "/deno.svg",
        "/docker.svg",
        "/redis.svg",
        "/vite.svg",
        "/github.svg",
        "/javascript.svg",
        "/supabase.svg",
        "/svelte.svg",
        "/vscode.svg"
    ];


    const newImages = images.slice(0, size);

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`]). sort(() => Math.random() - 0.5)
}