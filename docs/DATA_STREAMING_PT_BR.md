# Pipeline de Extração de Dados de PDFs

Um pipeline completo de processamento de dados em Python para extração, consolidação e análise de informações de múltiplos tipos de documentos PDF usando tecnologias OCR e pattern matching.

## 🎯 Visão Geral do Projeto

Este projeto automatiza a extração e consolidação de dados de três tipos de documentos PDF:

• **NF (Notas Fiscais)**: Extrai datas de emissão e informações do cliente
• **Planilhas**: Extrai informações de broker e status
• **Prestações (Extrato de Contas)**: Extrai números de processo e nomes de clientes

O pipeline processa tanto PDFs baseados em texto quanto PDFs escaneados (baseados em imagens) usando tecnologia OCR, consolida dados entre tipos de documentos e gera relatórios unificados para análise.

## ✨ Principais Características

### Extração de Dados
• 🔍 **Processamento Multi-Formato de PDF**: Lida com PDFs de texto e baseados em imagem
• 🖼️ **Integração OCR**: Tesseract OCR para extração de texto de documentos escaneados
• 📅 **Pattern Matching**: Extração baseada em Regex de datas, nomes e identificadores
• 🔄 **Descoberta Automática de Arquivos**: Varredura recursiva de diretórios e classificação

### Consolidação de Dados
• 🔗 **Matching Inteligente**: Referência cruzada de clientes entre múltiplas fontes de documentos
• 📊 **Mesclagem Completa de Dados**: Full outer join para preservar todos os registros
• 🗂️ **Gerenciamento de Duplicatas**: Gerencia múltiplos documentos por cliente
• ✅ **Validação de Dados**: Identifica documentos faltantes e inconsistências

### Saída e Relatórios
• 📄 **Exportação Multi-Formato**: Saída em CSV e Excel com dados formatados
• 📋 **Relatório de Arquivos Faltantes**: Identifica lacunas na documentação
• 🔀 **Mesclagem de PDFs**: Combina todos os documentos do cliente em PDFs únicos
• 📈 **Métricas de Qualidade de Dados**: Estatísticas sobre completude e duplicatas

## 🛠️ Tecnologias Utilizadas

• Python 3.x
• PyMuPDF (fitz): Renderização e extração de imagens de PDF
• Tesseract OCR: Reconhecimento óptico de caracteres
• Pillow (PIL): Processamento de imagens
• PyPDF2: Manipulação e mesclagem de PDF
• pandas: Manipulação e análise de dados
• openpyxl: Geração de arquivo Excel
• regex: Pattern matching e extração de texto

## 📋 Requisitos

```bash
pip install PyMuPDF pytesseract Pillow PyPDF2 pandas openpyxl
```

### Requisitos Adicionais

• Tesseract OCR instalado no seu sistema
  ◦ **Windows**: Baixar de [GitHub](https://github.com/UB-Mannheim/tesseract/wiki)
  ◦ **Linux**: `sudo apt-get install tesseract-ocr`
  ◦ **Mac**: `brew install tesseract`

## 🚀 Uso

### 1. Configurar Caminhos

Atualize as variáveis de caminho no notebook:

```python
PATH_NF = 'caminho_para_arquivos_invoices'
PATH_PLANILHAS_PRESTACOES = 'caminho_para_extrato_e_planilhas'
TESSERACT_PATH = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
```

### 2. Executar Extração de Dados

Execute as células do notebook em ordem:

1. **Imports & Setup**: Carregar bibliotecas e configurar caminhos
2. **Descoberta de Arquivos**: Varrer diretórios e popular tabelas iniciais
3. **Processamento de Nomes**: Padronizar nomes de clientes entre fontes
4. **Extração de Dados**: Extrair datas, números de processo e metadados
5. **Consolidação**: Mesclar dados de todas as fontes
6. **Exportação**: Gerar relatórios e PDFs mesclados

### 3. Revisar Saídas

O pipeline gera:

• `tabela_final_clientes.csv`: Dados consolidados completos
• `tabela_final_clientes.xlsx`: Relatório Excel formatado
• `clientes_arquivos_faltantes.xlsx`: Relatório de documentos faltantes
• `PDFs_Mesclados/`: PDFs mesclados individuais por cliente

## 📊 Estrutura de Dados

### Tabelas de Entrada

• **nf_table**: Dados de notas fiscais (origem, nome, data, broker, status)
• **pr_table**: Extrato de contas (origem, nome, name_found, process_number)
• **pl_table**: Planilhas (origem, nome, broker, status)

### Tabela de Saída (final_table)

Visão consolidada com todas as informações do cliente:

• Nome do cliente
• Origens do documento (listas para múltiplos arquivos)
• Metadados extraídos (datas, números de processo, status)
• Indicadores de qualidade de dados

## 🔍 Funções Principais

### `extrair_texto_pdf_ocr(file)`

Extrai texto de PDFs escaneados usando tecnologia OCR.

• Converte páginas de PDF em imagens de alta resolução
• Aplica Tesseract OCR
• Retorna texto completamente extraído

### `extrair_data_texto(texto)`

Extrai data de emissão do texto da fatura usando padrões regex.

• Corresponde aos formatos de data em português
• Lida com variações no texto do rótulo
• Retorna data em formato dd/mm/yyyy

### `processar_nome(nome)`

Padroniza nomes de clientes para correspondência entre documentos.

• Remove prefixos e sufixos
• Lida com casos especiais (herança, empresas)
• Garante formatação consistente

## 📈 Destaques do Projeto

Este projeto demonstra:

• ✅ **Design de Pipeline ETL**: Fluxo de trabalho completo de extract-transform-load
• ✅ **Tratamento de Dados Não Estruturados**: Processamento de PDFs com formatos variados
• ✅ **Gerenciamento de Qualidade de Dados**: Validação e identificação de dados faltantes
• ✅ **Processamento Automatizado de Documentos**: Operações em lote em centenas de arquivos
• ✅ **Habilidades de Referência Cruzada**: Correspondência de entidades entre múltiplas fontes
• ✅ **Geração de Relatórios**: Saídas profissionais em Excel/CSV

## 🎓 Competências Desenvolvidas

• Data Engineering
• Programação em Python
• OCR & Processamento de Imagens
• Manipulação de PDF
• Consolidação & Mesclagem de Dados
• Regex & Pattern Matching
• Pandas & Análise de Dados
• Tratamento de Erros & Logging
• Operações do Sistema de Arquivos
• Automação & Scripting

## 📝 Notas

• Esta é uma versão de portfólio com estrutura de código de exemplo
• Os dados reais do cliente foram removidos por privacidade
• Projetado para processar documentos financeiros, mas adaptável para outros domínios
• Otimizado para processamento em lote de grandes conjuntos de documentos

## 🤝 Contribuindo

Sinta-se à vontade para fazer um fork deste projeto e adaptá-lo às suas próprias necessidades de processamento de documentos!

## 📄 Licença

Este projeto é de código aberto e disponível para fins educacionais e de portfólio.

---

**Autor**: Pedro Canuto
**Propósito**: Projeto de Portfólio em Engenharia de Dados
**Ano**: 2025
**Cliente**: ANDDIAP (Associação Nacional de Defesa do Direito dos Idosos, Aposentados e Pencionistas)
**Filial**: Bahia - Corretor: Saul Freitas Figueiredo
