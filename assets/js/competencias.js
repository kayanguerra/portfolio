/* =====================================================================
   COMPETÊNCIAS TÉCNICAS — edite só esta lista.
   ---------------------------------------------------------------------
   Cada categoria tem duas listas:
     pratica: usei em trabalho real (tag verde)
     estudo:  estou estudando / desenvolvendo (tag tracejada)
   Para reclassificar, mova o nome de uma lista para a outra.
   Lista vazia = o rótulo não aparece. Categoria sem nada = não aparece.
   ===================================================================== */
var COMPETENCIAS = [
    {
        categoria: "Microsoft 365 e identidade",
        pratica: ["Microsoft 365", "Exchange Online", "SharePoint", "Teams", "OneDrive",
                  "Entra ID", "Intune", "Active Directory", "GPO", "Copilot e agentes"],
        estudo:  []
    },
    {
        categoria: "Infraestrutura e redes",
        pratica: ["Windows Server", "File Server", "DNS/DHCP", "TCP/IP", "Redes"],
        estudo:  ["VPN", "WireGuard"]
    },
    {
        categoria: "Segurança e proteção",
        pratica: ["pfSense", "FortiGate", "Cloudflare", "Firewall", "Acronis Cyber Protect", "Backup"],
        estudo:  ["Graylog", "Wireshark", "SIEM", "Snort", "WAF", "Kali Linux", "LGPD"]
    },
    {
        categoria: "Desenvolvimento web",
        pratica: ["HTML5", "CSS3", "JavaScript", "Git"],
        estudo:  ["Node.js", "Figma"]
    }
];

/* ---- renderização (não precisa mexer daqui para baixo) ---- */
(function () {
    var root = document.getElementById("competencias");
    if (!root) return;

    var NIVEIS = [
        { chave: "pratica", rotulo: "Experiência prática", classe: "" },
        { chave: "estudo",  rotulo: "Em desenvolvimento",  classe: " tech-chip--dev" }
    ];

    function el(tag, cls, txt) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (txt) n.textContent = txt;
        return n;
    }

    COMPETENCIAS.forEach(function (cat) {
        var temAlgo = NIVEIS.some(function (n) { return (cat[n.chave] || []).length; });
        if (!temAlgo) return;

        var bloco = el("div", "skill-cat");
        bloco.appendChild(el("p", "cv-subhead", cat.categoria));

        NIVEIS.forEach(function (n) {
            var itens = cat[n.chave] || [];
            if (!itens.length) return;

            var grupo = el("div", "skill-level skill-level--" + n.chave);
            grupo.appendChild(el("p", "skill-level-label", n.rotulo));

            var lista = el("ul", "tech-chips");
            lista.setAttribute("aria-label", cat.categoria + ": " + n.rotulo);
            itens.forEach(function (nome) {
                var li = el("li");
                li.appendChild(el("span", "tech-chip" + n.classe, nome));
                lista.appendChild(li);
            });
            grupo.appendChild(lista);
            bloco.appendChild(grupo);
        });

        root.appendChild(bloco);
    });
})();
