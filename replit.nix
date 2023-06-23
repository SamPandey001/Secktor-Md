{ pkgs }: {
    deps = [
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.imagemagick
        pkgs.yarn
        pkgs.git
        pkgs.ffmpeg
        pkgs.neofetch
        pkgs.libwebp
        pkgs.speedtest-cli
        pkgs.wget
        pkgs.libuuid
    ];
}