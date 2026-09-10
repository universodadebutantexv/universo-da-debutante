const savedSuppliers = [
  ['Assessora Bianka Temperine','Assessoria e cerimonial','Tabela especial','@cerimonialistabiankatemperine','4.8','cerimonial assessoria festa organização','5521975116319'],
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
  ['Assessora Bianka Temperine','Assessoria e cerimonial','Tabela especial para Mães do Grupo','@cerimonialistabiankatemperine','','cerimonial assessoria','5521975116319'],
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
function render(){
  if(!grid||!search||!count||!empty)return;
  sortSuppliers();
  const term=search.value.trim().toLocaleLowerCase('pt-BR');
  const result=suppliers.filter(s=>(!category||s.category===category)&&Object.values(s).join(' ').toLocaleLowerCase('pt-BR').includes(term));
  count.textContent=`${result.length} fornecedor${result.length===1?'':'es'} encontrado${result.length===1?'':'s'}`;
  grid.innerHTML=result.map(s=>{
    const phone=s.phone||whatsapp[suppliers.indexOf(s)]||'';
    return `<article class="supplier-card"><div class="supplier-top"><span class="category">${s.category}</span>${s.rating?`<span class="rating">★ ${s.rating}</span>`:''}</div><div class="supplier-logo" aria-label="Identidade de ${s.name}"><span>${initials(s.name)}</span><small>fornecedor parceiro</small><i class="supplier-seal">UD</i></div><h3>${s.name}</h3><p class="benefit"><b>Vantagem para você</b><span>${s.benefit}</span></p><div class="card-actions contact-art"><img src="assets/contact/instagram-whatsapp.png" alt="" aria-hidden="true"><a class="social-button instagram" aria-label="Abrir Instagram de ${s.name}" href="https://instagram.com/${String(s.handle||'').replace(/^@/,'')}" target="_blank" rel="noreferrer"></a><a class="social-button whatsapp" aria-label="Abrir WhatsApp de ${s.name}" href="https://wa.me/${phone}" target="_blank" rel="noreferrer"></a></div></article>`;
  }).join('');
  empty.hidden=!!result.length;
}

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
const sheetUrl=name=>`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(name)}&t=${Date.now()}`;
async function readSheet(name){const response=await fetch(sheetUrl(name));if(!response.ok)throw new Error('Planilha indisponível');const raw=await response.text();const json=JSON.parse(raw.slice(raw.indexOf('{'),raw.lastIndexOf('}')+1));return(json.table.rows||[]).map(row=>(row.c||[]).map(cell=>cell?.f??cell?.v??''));}
function setText(element,value){if(!value)return;const icon=element.querySelector('span');element.textContent=value;if(icon&&element.matches('.eyebrow'))element.prepend(icon);}
function applyTexts(rows){
  const content=Object.fromEntries(rows.slice(1).filter(row=>row[0]&&row[1]!==undefined).map(row=>[String(row[0]).trim(),String(row[1]) ]));
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
    const updated=supplierRows.slice(1).filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]).map(row=>({name:String(row[1]),category:String(row[2]||'Outros'),benefit:String(row[3]||'Vantagem exclusiva'),handle:String(row[4]||'@universodadebutante'),phone:String(row[5]||'').replace(/\D/g,''),rating:String(row[6]||''),tags:String(row[8]||'')}));
    const phones=supplierRows.slice(1).filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]).map(row=>String(row[5]||'').replace(/\D/g,''));
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
    const activeRows=supplierRows.slice(1).filter(row=>String(row[0]).trim().toLocaleLowerCase('pt-BR')==='sim'&&row[1]);
    const updated=activeRows.map(row=>({name:String(row[1]),category:String(row[2]||'Outros'),benefit:String(row[3]||'Vantagem exclusiva'),handle:String(row[4]||'@universodadebutante'),phone:String(row[5]||'').replace(/\D/g,''),rating:String(row[6]||''),tags:String(row[8]||'')}));
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
