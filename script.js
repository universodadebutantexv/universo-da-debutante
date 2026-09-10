const savedSuppliers = [
  ['Bianka Temperine','Assessoria e cerimonial','Tabela especial','@cerimonialistabiankatemperine','4.8','cerimonial assessoria festa organização','5521975116319'],
  ['HM Produções','Atrações e animações','Tabela especial','@hmproducoes0','','banda música show animação','5521980622929'],
  ['Os Elétricos','Atrações e animações','Tabela especial','@oseletricos','','banda música show animação','5521977522460'],
  ['Mimos Brindes','Brindes personalizados','Tabela especial','@presentesmimos.mimos','','brindes personalizados','5511966932773'],
  ['Ateliê de La Passion','Brindes personalizados','Tabela especial','@ateliedelapassion','','robes lembranças','5521982022403'],
  ['Ateliê Mayra Bueno','Brindes personalizados','Tabela especial','@ateliemayrabueno','','robes pijamas','554499268869'],
  ['Matheus Albuquerque','Decoração','Tabela especial','@matheusalbuquerquedecoracao','','decoração festa','5521981049375'],
  ['Requinte Forminhas','Decoração','5% de desconto','@requinteforminha','','forminhas decoração','553181086423'],
  ['Nando Doces Finos','Doces e confeitaria','10% de desconto em produtos selecionados','@nandodocesfinos','','doces confeitaria','5521983737235'],
  ["Doces' Eli Delícias",'Doces e confeitaria','5% de desconto no catálogo e degustações','@doceselidelicias','','doces confeitaria','5521987376579'],
  ['Edi Confeitaria','Doces e confeitaria','Tabela especial','@ediconfeitaria','','doces confeitaria','5521970153000'],
  ['HRM Crepes','Estação gourmet','10% de desconto + brinde exclusivo','@hrmcrepes','4.0','crepes estação gourmet','5521990094107'],
  ["D´ Click Entretenimento",'Foto cabine','Tabela especial','@dclickentretenimentodigital','','foto cabine','5521995987637'],
  ['BD 360 Eventos','Foto cabine','Benefícios diferentes para cada serviço','@bd360_eventos','','foto cabine 360','5521979865255'],
  ['AC Foto e Filme','Foto e filmagem','Tabela especial','@acfotoefilme','','foto filmagem','5521965855382'],
  ['Queluci Studio','Foto e filmagem','Tabela especial','@lucianaqueluci.fotografia','5.0','foto filmagem','5521986564276'],
  ['Amores Fotografia','Foto e filmagem','Tabela especial','@amoresdedebutante','5.0','foto filmagem','5521976417877'],
  ['Ana Perre Fotografia','Foto e filmagem','Tabela especial','@fotografo_de_debutantesrj','5.0','foto filmagem','5521964183653'],
  ['Anateliê Personalizados','Lembranças olfativas','10% em todo catálogo, fora promoções vigentes','@anateliepersonalizados','','lembranças personalizados','5521995124587'],
  ['Caroll Cardozo','Make e hair','Tabela especial','@carollcardozo','5.0','maquiagem cabelo make hair','5521981841188'],
  ['Ingrid Freitas Beauty','Make e hair','10% de desconto para as debutantes','@ingridfreitasbeauty','','maquiagem cabelo make hair','5521960180142'],
  ['KC Arte com Amor','Papelaria e gráfica','5% de desconto para o grupo','@kcartecomamor','','papelaria gráfica convites','5521974830577'],
  ['Célia Montagem de Álbuns','Papelaria e gráfica','Tabela especial','@celhamontagemdealbunz','','papelaria álbuns','5515997036236'],
  ['AV Digital','Papelaria e gráfica','Tabela especial','@avdigitalpersonalizada','','papelaria gráfica','5521987388886'],
  ['Casamento Zen','Spa e relaxamento','15% de desconto em todos os pacotes de spa','@casamento_zenn','5.0','spa relaxamento','5521971958721'],
  ['Marcelly Malaquias','Story maker','5% de desconto','@malaq.storymaker','','story maker','5521980157277'],
  ['Movimentando Histórias','Story maker','Descontos que podem chegar a 50%','@movimentandohistorias','','story maker','5521996581685'],
  ['Antara Gold','Vestidos','5% de desconto em itens não promocionais','@antaragoldrio','5.0','vestidos debutante','5521991449298']
];
// A planilha é a fonte oficial. Esta lista é apenas a cópia segura usada enquanto ela carrega.
savedSuppliers.splice(0, savedSuppliers.length,
  ['Bianka Temperine','Assessoria e cerimonial','Tabela especial para Mães do Grupo','@cerimonialistabiankatemperine','','cerimonial assessoria','5521975116319'],
  ['HM Produções','Atrações e animações','Tabela especial para Mães do Grupo','@hmproducoes0','','banda musica show','5521980622929'],
  ['Os Elétricos','Atrações e animações','Tabela especial para Mães do Grupo','@oseletricos','','banda personagens','5521977522460'],
  ['AV Digital','Convites Vituais','Tabela especial para Mães do Grupo','@avdigitalpersonalizada','','convites digitais','5521987388886'],
  ["Doces' Eli Delícias",'Doces e Confeitaria','5% de desconto no catálogo e degustações para Mães do Grupo','@doceselidelicias','','doces confeitaria','5521987376579'],
  ['Edi Confeitaria','Doces e Confeitaria','Tabela especial para Mães do Grupo','@ediconfeitaria','','doces confeitaria','5521970153000'],
  ['Nando Doces Finos','Doces e Confeitaria','10% de desconto em produtos selecionados para Mães do Grupo','@nandodocesfinos','','doces confeitaria','5521983737235'],
  ['BD 360 Eventos','Foto Instantânea','Benefícios diferentes para cada serviço para Mães do Grupo','@bd360_eventos','','foto 360','5521979865255'],
  ['D\u00b4 Click Entretenimento','Foto Instantânea','Tabela especial para Mães do Grupo','@dclickentretenimentodigital','','foto cabine','5521995987637'],
  ['AC Foto e Filme','Fotografia e Filamgem','Tabela especial para Mães do Grupo','@acfotoefilme','','foto filmagem','5521965855382'],
  ['Amores Fotografia','Fotografia e Filamgem','Tabela especial para Mães do Grupo','@amoresdedebutante','','foto filmagem','5521976417877'],
  ['Ana Perre Fotografia','Fotografia e Filamgem','Tabela especial para Mães do Grupo','@fotografo_de_debutantesrj','','foto filmagem','5521964183653'],
  ['Caroll Cardozo','Make e Hair','Tabela especial para Mães do Grupo','@carollcardozo','','make hair','5521981841188'],
  ['Ingrid Freitas Beauty','Make e Hair','10% de desconto para as debutantes Tabela especial para Mães do Grupo','@ingridfreitasbeauty','','make hair','5521960180142'],
  ['Célia Montagem de Álbuns','Papelaria e Gráfica','Tabela especial para Mães do Grupo','@celhamontagemdealbunz','','albuns papelaria','5515997036236'],
  ['KC Arte com Amor','Papelaria e Gráfica','5% de desconto para Mães do Grupo','@kcartecomamor','','papelaria grafica','5521974830577'],
  ['Ateliê Mayra Bueno','Robes','Tabela especial para Mães do Grupo','@ateliemayrabueno','','robes','554499268869'],
  ['Ateliê de La Passion','Robes e Lembranças','Tabela especial para Mães do Grupo','@ateliedelapassion','','robes lembrancas','5521982022403'],
  ['Debutante Zen','Spa e Relaxamento','15% de desconto em todos os pacotes de SPA para Mães do Grupo','@casamento_zenn','','spa relaxamento','5521971958721'],
  ['Marcelly Malaquias','Storymaker','5% de desconto para Mães do Grupo','@malaq.storymaker','','storymaker','5521980157277'],
  ['Antara Gold','Vestidos','5% de desconto em itens não promocionais para Mães do Grupo','@antaragoldrio','','vestidos','5521991449298'],
  ['Lê Arte Ateliê','Brindes Personalizados','Tabela especial para Mães do Grupo','@le_arte_atelie','','brindes personalizados','5521964372147'],
  ['Luz Criativa','Brindes Personalizados','Tabela especial para Mães do Grupo','@luzcriativarj','','brindes personalizados','5521968251686'],
  ['Fricotte Personalizados','Brindes Personalizados','Tabela especial para Mães do Grupo','@fricotte_','','brindes personalizados','5521984443943'],
  ['Dona Mirinha','Doces e Confeitaria','Tabela especial para Mães do Grupo','@dacasadamirinha','','doces confeitaria','5521965956017'],
  ['Studio Nonna','Foto Instantânea','Tabela especial para Mães do Grupo','@studiononna','','foto instantanea','5521999868286'],
  ['Box Photo e Films','Fotografia e Filamgem','Tabela especial para Mães do Grupo','@boxphotoefilmagem','','foto filmagem','21970078647'],
  ['Gabriella Machado Makeup','Make e Hair','Tabela especial para Mães do Grupo','@gaabsmaquiadora','','make hair','5521987367240'],
  ['CM Cartonaria','Papelaria e Gráfica','Tabela especial para Mães do Grupo','@cmcartonaria','','papelaria grafica','5521964433148'],
  ['Entre Papeis','Papelaria e Gráfica','Tabela especial para Mães do Grupo','@entrepapeisdesign','','papelaria grafica','5521936182998'],
  ['DC Design','Papelaria e Gráfica','Tabela especial para Mães do Grupo','@dc_designdc','','papelaria grafica','5521967603971'],
  ['Gráfica AM LTDA','Chinelos e Brindes','Tabela especial para Mães do Grupo','@grafica_am_','','chinelos brindes','5521969830983'],
  ['Lu Rodrigues','Vestidos','Tabela especial para Mães do Grupo','@lurodriguesdebutantes','','vestidos','5521982930021'],
  ['keD produções','DJ atração','Tabela especial para Mães do Grupo','@kd_producoesoficial','','dj atracao','5521998191042']
);
let suppliers = savedSuppliers.map(([name,category,benefit,handle,rating,tags,phone]) => ({name,category,benefit,handle,rating,tags,phone:String(phone||'').replace(/\D/g,'')}));
const whatsapp = savedSuppliers.map(row => row[6]);
const grid=document.querySelector('#supplierGrid');
const search=document.querySelector('#search');
const filters=document.querySelector('#filters');
const count=document.querySelector('#resultCount');
const empty=document.querySelector('#emptyState');
const filterToggle=document.querySelector('#filterToggle');
let category='';
let categories=[];

const sortText=(a,b)=>String(a||'').localeCompare(String(b||''),'pt-BR',{sensitivity:'base'});
function sortSuppliers(){suppliers.sort((a,b)=>sortText(a.category,b.category)||sortText(a.name,b.name));}
const requiredCategories=['Assessoria e cerimonial','Atrações e animações'];
const requiredSegmentRows=savedSuppliers.filter(row=>requiredCategories.includes(row[1]));
function ensureRequiredSegmentSuppliers(updated,phones){
  const present=new Set(updated.map(s=>s.name));
  requiredSegmentRows.forEach(([name,category,benefit,handle,rating,tags,phone])=>{
    if(present.has(name))return;
    updated.push({name,category,benefit,handle,rating,tags,phone:String(phone||'').replace(/\D/g,'')});
    phones.push(String(phone||'').replace(/\D/g,''));
  });
}
function refreshCategories(){sortSuppliers();categories=[...new Set([...suppliers.map(s=>s.category),...requiredCategories])].sort((a,b)=>sortText(a,b));}
function renderFilters(){if(!filters)return;filters.innerHTML=`<button class="${!category?'selected':''}" data-category="">Todas</button>`+categories.map(c=>`<button class="${category===c?'selected':''}" data-category="${c}">${c}</button>`).join('');}
function initials(name){return name.split(/\s+/).slice(0,2).map(word=>word[0]).join('').replace(/[^A-ZÀ-Ú]/gi,'').toUpperCase();}
function closeFilters(){filters.classList.remove('open');filterToggle?.setAttribute('aria-expanded','false');}

// Garante link absoluto sem alterar nada além de completar o protocolo quando faltar.
function ensureUrl(value){const trimmed=String(value||'').trim();if(!trimmed)return'';if(/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(trimmed))return trimmed;return`https://${trimmed}`;}
function waLink(phone){const raw=String(phone||'').trim();if(!raw)return'';if(/^https?:\/\//i.test(raw))return raw;const digits=raw.replace(/\D/g,'');return digits?`https://wa.me/${digits}`:'';}
function igLink(handle){const raw=String(handle||'').trim();if(!raw)return'';if(/^https?:\/\//i.test(raw))return raw;return`https://instagram.com/${raw.replace(/^@/,'')}`;}

const CARD_ICONS={
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
  site:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z"/></svg>',
  address:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  gmb:'<svg viewBox="0 0 24 24"><path d="M21.6 12.23c0-.74-.06-1.28-.2-1.84H12v3.33h5.5c-.11.9-.71 2.26-2.04 3.17l-.02.13 2.96 2.26.2.02c1.88-1.7 2.96-4.22 2.96-7.07Z"/><path d="M12 22c2.67 0 4.92-.86 6.56-2.34l-3.12-2.4c-.84.57-1.98.96-3.44.96-2.63 0-4.86-1.72-5.66-4.1l-.12.01-3.08 2.35-.04.11C4.14 19.86 7.79 22 12 22Z"/><path d="M6.34 14.12A5.9 5.9 0 0 1 6.02 12c0-.74.13-1.46.31-2.12L6.32 9.75 3.2 7.36l-.1.05A9.9 9.9 0 0 0 2 12c0 1.6.39 3.12 1.1 4.47l3.24-2.35Z"/><path d="M12 5.98c1.85 0 3.1.79 3.81 1.46l2.78-2.68C16.91 3.16 14.67 2 12 2 7.79 2 4.14 4.14 3.1 7.55l3.22 2.5c.8-2.38 3.03-4.07 5.68-4.07Z"/></svg>'
};
function cardIconLink(kind,href,label){const url=ensureUrl(href);if(!url)return'';return`<a class="v2-icon v2-${kind}" href="${url}" target="_blank" rel="noreferrer" aria-label="${label}">${CARD_ICONS[kind]}</a>`;}

function render(){
  if(!grid||!search||!count||!empty)return;
  sortSuppliers();
  const term=search.value.trim().toLocaleLowerCase('pt-BR');
  const result=suppliers.filter(s=>(!category||s.category===category)&&Object.values(s).join(' ').toLocaleLowerCase('pt-BR').includes(term));
  count.textContent=`${result.length} fornecedor${result.length===1?'':'es'} encontrado${result.length===1?'':'s'}`;
  grid.innerHTML=result.map(s=>{
    const phone=s.phone||whatsapp[suppliers.indexOf(s)]||'';
    return `<article class="supplier-card"><div class="supplier-logo" aria-label="Identidade de ${s.name}"><span>${initials(s.name)}</span><small>fornecedor parceiro</small><img class="supplier-seal" src="assets/brand/seal-parceiro.png" alt="Selo Parceiro do Universo" /></div><h3>${s.name}</h3><button type="button" class="v2-category" data-category="${s.category}">${s.category}</button><p class="v2-benefit-text">${s.description||s.benefit}</p><span class="v2-benefit-pill">${s.benefit}</span><div class="v2-actions"><a class="v2-whatsapp" href="${waLink(phone)}" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp de ${s.name}">WhatsApp</a><div class="v2-icon-row">${cardIconLink('instagram',igLink(s.handle),`Instagram de ${s.name}`)}${cardIconLink('site',s.site,`Site de ${s.name}`)}${cardIconLink('address',s.address,`Endereço de ${s.name}`)}${cardIconLink('gmb',s.gmb,`Google Meu Negócio de ${s.name}`)}</div></div></article>`;
  }).join('');
  empty.hidden=!!result.length;
}
grid?.addEventListener('click',event=>{
  const button=event.target.closest('.v2-category');
  if(!button)return;
  category=button.dataset.category||'';
  closeFilters();
  renderFilters();
  render();
});

filterToggle?.addEventListener('click',event=>{event.stopPropagation();if(!filters)return;const opening=!filters.classList.contains('open');filters.classList.toggle('open',opening);filterToggle.setAttribute('aria-expanded',String(opening));});
filters?.addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;category=button.dataset.category;closeFilters();renderFilters();render();});
document.addEventListener('click',event=>{if(!event.target.closest('.filter-wrap'))closeFilters();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFilters();});
search?.addEventListener('input',render);
document.querySelector('#clearFilters')?.addEventListener('click',()=>{category='';if(search)search.value='';closeFilters();renderFilters();render();});
document.querySelector('.menu-button')?.addEventListener('click',()=>{const header=document.querySelector('.topbar');const button=document.querySelector('.menu-button');const open=header.classList.toggle('menu-open');button.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.topbar nav a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.topbar')?.classList.remove('menu-open');document.querySelector('.menu-button')?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('a[href="#indicacoes"]').forEach(link=>{link.href='fornecedores.html';});
refreshCategories();renderFilters();render();

const SHEET_ID='1LhrxZICjaozp7elgQjzc4Vi2SzOGMh36GAfNRX_zr34';
const sheetUrl=name=>`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(name)}&headers=1&t=${Date.now()}`;
async function readSheet(name){const response=await fetch(sheetUrl(name));if(!response.ok)throw new Error('Planilha indisponível');const raw=await response.text();const json=JSON.parse(raw.slice(raw.indexOf('{'),raw.lastIndexOf('}')+1));return(json.table.rows||[]).map(row=>(row.c||[]).map(cell=>cell?.f??cell?.v??''));}
function setText(element,value){if(!value)return;const icon=element.querySelector('span');element.textContent=value;if(icon&&element.matches('.eyebrow'))element.prepend(icon);}
function applyTexts(rows){
  const content=Object.fromEntries(rows.filter(row=>row[0]&&row[1]!==undefined).map(row=>[String(row[0]).trim(),String(row[1]) ]));
  document.querySelectorAll('[data-text]').forEach(element=>setText(element,content[element.dataset.text]));
  document.querySelectorAll('[data-placeholder]').forEach(element=>{if(content[element.dataset.placeholder])element.placeholder=content[element.dataset.placeholder];});
  document.querySelectorAll('[data-link]').forEach(element=>{const value=content[element.dataset.link];if(value)element.href=value;});
  renderInstagram(content['Instagram URL']||'https://instagram.com/universodadebutante',content['Instagram widget ID']);
}
function renderInstagram(profileUrl,widgetId){
  const feed=document.querySelector('#instagramFeed');
  if(!feed)return;
  // Pula os posts fixados e preserva os cards originais desta seção.
  const latestPosts=[
    {path:'p/DcE_AdsFsjW',image:'data:image/jpeg;base64,'+(window.UniversoInstagramThumbnails?.first||''),title:'5 motivos para você<br />não perder a Expo'},
    {path:'reel/Db_hvCCAuiM',image:'data:image/jpeg;base64,'+(window.UniversoInstagramThumbnails?.second||''),title:'Mãe, já parou para pensar<br />nos 15 anos dela?'},
    {path:'reel/Db9GZubAegt',image:'data:image/jpeg;base64,'+(window.UniversoInstagramThumbnails?.third||''),title:'A contagem regressiva<br />começou!'}
  ];
  feed.innerHTML=latestPosts.map((post,index)=>`<a class="instagram-card instagram-card-${index+1}" href="https://www.instagram.com/${post.path}/" target="_blank" rel="noreferrer" aria-label="Abrir post ${index+1} no Instagram"><img class="instagram-thumbnail" src="${post.image}" alt="Miniatura da postagem ${index+1} do Instagram" /><span>@universodadebutante</span><strong>${post.title}</strong></a>`).join('');
}
async function syncSiteContent(){
  try{
    const [supplierRows,textRows]=await Promise.all([readSheet('Fornecedores'),readSheet('Textos do site')]);
    const updated=supplierRows.filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]).map(row=>({name:String(row[1]),category:String(row[2]||'Outros'),benefit:String(row[3]||'Vantagem exclusiva'),handle:String(row[4]||'@universodadebutante'),phone:String(row[5]||''),rating:String(row[6]||''),tags:String(row[8]||''),site:String(row[9]||''),address:String(row[10]||''),gmb:String(row[11]||''),description:String(row[12]||'')}));
    const phones=supplierRows.filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]).map(row=>String(row[5]||'').replace(/\D/g,''));
    // Mantém os fornecedores dos segmentos essenciais caso a planilha responda apenas uma parte da lista.
    ensureRequiredSegmentSuppliers(updated,phones);
    if(updated.length >= 20){suppliers=updated;whatsapp.splice(0,whatsapp.length,...phones);category='';refreshCategories();renderFilters();render();}
    applyTexts(textRows);
  }catch(error){console.info('Usando conteúdo padrão enquanto a planilha não responde.',error);}
}
syncSiteContent();

// Atualiza os fornecedores de forma independente dos textos do site.
// Assim, uma falha temporária na aba de textos nunca impede a lista de aparecer.
async function syncSuppliersFromSheet(){
  try{
    const supplierRows=await readSheet('Fornecedores');
    const activeRows=supplierRows.filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]);
    const updated=activeRows.map(row=>({name:String(row[1]),category:String(row[2]||'Outros'),benefit:String(row[3]||'Vantagem exclusiva'),handle:String(row[4]||'@universodadebutante'),phone:String(row[5]||''),rating:String(row[6]||''),tags:String(row[8]||''),site:String(row[9]||''),address:String(row[10]||''),gmb:String(row[11]||''),description:String(row[12]||'')}));
    const phones=activeRows.map(row=>String(row[5]||'').replace(/\D/g,''));
    ensureRequiredSegmentSuppliers(updated,phones);
    if(updated.length){
      suppliers=updated;
      whatsapp.splice(0,whatsapp.length,...phones);
      category='';
      refreshCategories();
      renderFilters();
      render();
    }
  }catch(error){
    console.info('A lista salva de fornecedores continua visível enquanto a planilha atualiza.',error);
  }
}
window.syncSuppliersFromSheet=syncSuppliersFromSheet;
syncSuppliersFromSheet();
